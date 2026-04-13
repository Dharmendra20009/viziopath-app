"""
Lambda handler for ATS resume generation.

Invoked asynchronously by the parser Lambda. Downloads parsed JSON from S3,
generates both PDF and DOCX output, uploads them to S3, and updates the
DynamoDB job record to 'completed'.
"""

import json
import logging
import os
import time

import boto3

from docx_builder import build_docx
from pdf_builder import build_pdf

logger = logging.getLogger()
logger.setLevel(logging.INFO)

s3 = boto3.client("s3")
dynamodb = boto3.resource("dynamodb")

BUCKET = os.environ["S3_BUCKET"]
TABLE_NAME = os.environ["DYNAMODB_TABLE"]


def update_job_status(job_id: str, status: str, **extra_fields):
    table = dynamodb.Table(TABLE_NAME)
    update_expr = "SET #s = :status, updatedAt = :now"
    expr_values = {":status": status, ":now": int(time.time())}
    expr_names = {"#s": "status"}

    for key, value in extra_fields.items():
        update_expr += f", {key} = :{key}"
        expr_values[f":{key}"] = value

    table.update_item(
        Key={"jobId": job_id},
        UpdateExpression=update_expr,
        ExpressionAttributeValues=expr_values,
        ExpressionAttributeNames=expr_names,
    )


def lambda_handler(event, context):
    job_id = event["jobId"]
    parsed_key = event["parsedJsonKey"]
    bucket = event.get("bucket", BUCKET)

    logger.info(json.dumps({"event": "generator_invoked", "job_id": job_id}))

    try:
        update_job_status(job_id, "generating")

        response = s3.get_object(Bucket=bucket, Key=parsed_key)
        parsed_data = json.loads(response["Body"].read().decode("utf-8"))

        logger.info(json.dumps({
            "event": "json_loaded",
            "job_id": job_id,
            "sections": list(parsed_data.keys()),
        }))

        docx_bytes = build_docx(parsed_data)
        docx_key = f"output/{job_id}/resume.docx"
        s3.put_object(
            Bucket=bucket,
            Key=docx_key,
            Body=docx_bytes,
            ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        )
        logger.info(json.dumps({"event": "docx_generated", "job_id": job_id, "key": docx_key}))

        pdf_bytes = build_pdf(parsed_data)
        pdf_key = f"output/{job_id}/resume.pdf"
        s3.put_object(
            Bucket=bucket,
            Key=pdf_key,
            Body=pdf_bytes,
            ContentType="application/pdf",
        )
        logger.info(json.dumps({"event": "pdf_generated", "job_id": job_id, "key": pdf_key}))

        update_job_status(
            job_id,
            "completed",
            outputPdfKey=pdf_key,
            outputDocxKey=docx_key,
        )

        logger.info(json.dumps({"event": "generation_complete", "job_id": job_id}))

        return {"statusCode": 200, "body": json.dumps({"jobId": job_id, "status": "completed"})}

    except Exception as e:
        logger.error(json.dumps({
            "event": "generation_error",
            "job_id": job_id,
            "error": str(e),
        }))
        update_job_status(job_id, "failed", errorMessage=str(e))
        raise
