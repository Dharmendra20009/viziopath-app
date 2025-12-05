import os
import uuid
import subprocess
import tempfile
from flask import Flask, request, send_file, jsonify
from pathlib import Path
from flask_cors import CORS
import shutil

app = Flask(__name__)
CORS(app)
TMP_DIR = Path.cwd() / "temp"
TMP_DIR.mkdir(exist_ok=True)


@app.post("/api/compile")
def compile_latex():
    data = request.get_json()
    code = data.get("code", "")

    if not code.strip():
        return jsonify({"error": "No LaTeX code provided"}), 400

    tmp_id = str(uuid.uuid4())
    tex_path = TMP_DIR / f"{tmp_id}.tex"
    pdf_path = TMP_DIR / f"{tmp_id}.pdf"

    try:
        tex_path.write_text(code, encoding="utf-8")

        process = subprocess.Popen(
            [
                "pdflatex",
                "-interaction=nonstopmode",
                "-output-directory",
                str(TMP_DIR),
                str(tex_path)
            ],
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True
        )

        stdout, _ = process.communicate()
        print(stdout)

        if process.returncode != 0:
            return jsonify({"error": "LaTeX compilation failed", "log": stdout}), 500

        if not pdf_path.exists():
            return jsonify({"error": "PDF not generated"}), 500

        return send_file(
            pdf_path,
            mimetype="application/pdf",
            as_attachment=False,
            download_name=f"{tmp_id}.pdf"
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        try:
            if tex_path.exists(): tex_path.unlink()
            if pdf_path.exists(): pdf_path.unlink()
        except Exception:
            pass


@app.get("/")
def health_check():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    print("Temporary folder:", TMP_DIR)
    app.run(debug=True)
