from flask import Flask, request, render_template, redirect, url_for, session
from database import db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
import uuid

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)
app.secret_key = "secret_key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html", a_index=False)

@app.route("/registro", methods=["GET", "POST"])
def registro():
    if request.method == "GET":
        return render_template("registro.html", a_index=True)

@app.route("/entradas", methods=["GET", "POST"])
def entradas():
    if request.method == "GET":
        return render_template("entradas.html", a_index=True)

@app.route("/metricas", methods=["GET", "POST"])
def metricas():
    if request.method == "GET":
        return render_template("metricas.html", a_index=True)

if __name__ == "__main__":
    app.run(host="0.0.0.0" ,debug=True)