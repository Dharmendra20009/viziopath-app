"""
Lambda handler for resume parsing.

Triggered by S3 ObjectCreated events on the uploads/ prefix.
Downloads the uploaded file, extracts text, parses into structured JSON,
stores the result in S3, and invokes the generator Lambda.
"""

import json
import logging
import os
import time
import urllib.parse
from io import BytesIO

import boto3

from resume_nlp import parse_resume

logger = logging.getLogger()
logger.setLevel(logging.INFO)

s3 = boto3.client("s3")
dynamodb = boto3.resource("dynamodb")
lambda_client = boto3.client("lambda")

BUCKET = os.environ["S3_BUCKET"]
TABLE_NAME = os.environ["DYNAMODB_TABLE"]
GENERATOR_FUNCTION = os.environ["GENERATOR_FUNCTION_NAME"]


def extract_text_from_pdf(file_bytes: bytes) -> str:
    from PyPDF2 import PdfReader

    reader = PdfReader(BytesIO(file_bytes))
    pages = []
    for page in reader.pages:
        text = page.extract_text()
        if text:
            pages.append(text)
    return "\n".join(pages)


def extract_text_from_docx(file_bytes: bytes) -> str:
    from docx import Document

    doc = Document(BytesIO(file_bytes))
    return "\n".join(para.text for para in doc.paragraphs if para.text.strip())


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
    logger.info(json.dumps({"event": "parser_invoked", "records": len(event.get("Records", []))}))

    for record in event.get("Records", []):
        bucket = record["s3"]["bucket"]["name"]
        key = urllib.parse.unquote_plus(record["s3"]["object"]["key"])

        logger.info(json.dumps({"event": "processing_file", "bucket": bucket, "key": key}))

        parts = key.split("/")
        if len(parts) < 3:
            logger.warning(json.dumps({"event": "invalid_key_format", "key": key}))
            continue

        job_id = parts[1]
        filename = parts[2]
        extension = filename.rsplit(".", 1)[-1].lower() if "." in filename else ""

        try:
            update_job_status(job_id, "parsing")

            response = s3.get_object(Bucket=bucket, Key=key)
            file_bytes = response["Body"].read()

            if extension == "pdf":
                raw_text = extract_text_from_pdf(file_bytes)
            elif extension in ("docx", "doc"):
                raw_text = extract_text_from_docx(file_bytes)
            else:
                raise ValueError(f"Unsupported file type: .{extension}")

            if not raw_text.strip():
                raise ValueError("No text content extracted from the file")

            logger.info(json.dumps({
                "event": "text_extracted",
                "job_id": job_id,
                "char_count": len(raw_text),
            }))

            parsed_data = parse_resume(raw_text)

            parsed_key = f"parsed/{job_id}/data.json"
            s3.put_object(
                Bucket=bucket,
                Key=parsed_key,
                Body=json.dumps(parsed_data, indent=2),
                ContentType="application/json",
            )

            update_job_status(job_id, "parsed", parsedJsonKey=parsed_key)

            logger.info(json.dumps({"event": "parse_complete", "job_id": job_id}))

            lambda_client.invoke(
                FunctionName=GENERATOR_FUNCTION,
                InvocationType="Event",
                Payload=json.dumps({
                    "jobId": job_id,
                    "parsedJsonKey": parsed_key,
                    "bucket": bucket,
                }),
            )

            logger.info(json.dumps({"event": "generator_invoked", "job_id": job_id}))

        except Exception as e:
            logger.error(json.dumps({
                "event": "parse_error",
                "job_id": job_id,
                "error": str(e),
            }))
            update_job_status(job_id, "failed", errorMessage=str(e))
            raise

    return {"statusCode": 200, "body": "Processing complete"}
