from flask import Flask, request, render_template, redirect, url_for, session
from database.db import Miembro, Actividad, Foto, Comuna, SessionLocal
from sqlalchemy.orm import joinedload
from werkzeug.utils import secure_filename
from datetime import datetime
import filetype
import hashlib
import os
import re

UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
app.secret_key = "secret_key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def es_imagen_valida(stream):
    stream.seek(0)
    kind = filetype.guess(stream)
    stream.seek(0)
    return kind is not None and kind.mime in ("image/jpeg", "image/png")


def validar_registro_servidor(form, files):
    errores = []

    nombre = form.get('nombre', '').strip()
    if not re.fullmatch(r'[A-ZÁÉÍÓÚÑÜ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]{1,16}\s[A-ZÁÉÍÓÚÑÜ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]{1,16}\s[A-ZÁÉÍÓÚÑÜ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]{1,16}', nombre):
        errores.append("Nombre")

    email = form.get('email', '').strip()
    if not re.fullmatch(r'[0-9a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\.\-_]{1,32}@(?:ing|ug|dcc)\.uchile\.cl', email):
        errores.append("Correo")

    telefono = form.get('telefono', '').strip()
    if not re.fullmatch(r'^\+?[0-9\s\-]{8,15}$', telefono):
        errores.append("Teléfono")

    rol = form.get('rol', '')
    if rol not in ["pregrado", "postgrado", "funcionario", "academico"]:
        errores.append("Rol")

    comuna = form.get('comuna', '')
    if not comuna.isdigit():
        errores.append("Comuna")

    nombre_actividad = form.get('nombre-actividad', '').strip()
    if not re.fullmatch(r'[0-9a-zA-ZáéíóúÁÉÍÓÚñÑüÜ!¡?¿\-_\. ]{1,128}', nombre_actividad):
        errores.append("Nombre de la actividad")

    tipo = form.get('tipo', '')
    if tipo not in ["deporte", "recreación", "arte", "social", "tecnología", "otra"]:
        errores.append("Tipo de la actividad")

    fecha = form.get('fecha', '')
    if not fecha:
        errores.append("Fecha de la actividad")

    try:
        horas = int(form.get('horas', 0))
        if horas <= 0 or horas >= 100:
            errores.append("Duración de la actividad")
    except ValueError:
        errores.append("Duración de la actividad")

    fotos = files.getlist('fotos')
    if not fotos or len(fotos) > 5:
        errores.append("Fotos de la actividad")
    else:
        for foto in fotos:
            if foto.filename == '':
                continue
            foto_data = foto.read()
            foto.seek(0)
            if len(foto_data) > 5 * 1024 * 1024:
                errores.append("Fotos de la actividad (tamaño excedido)")
                break
            if not es_imagen_valida(foto):
                errores.append("Fotos de la actividad (formato inválido)")
                break

    link = form.get('link', '').strip()
    if not re.fullmatch(r'^(https?:\/\/)?(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}\.)+[a-zA-Z]{2,63}(?:\.[a-zA-Z]{2,63})?(?:\/.*)?$', link):
        errores.append("Enlace relacionada a la actividad")

    descripcion = form.get('descripcion', '').strip()
    if len(descripcion) == 0 or len(descripcion) > 500:
        errores.append("Descripción de la actividad")

    return errores


@app.route("/", methods=["GET"])
def index():
    db_session = SessionLocal()
    try:
        ultimos_miembros = db_session.query(Miembro).options(joinedload(Miembro.comuna)).order_by(Miembro.fecha_registro.desc()).limit(5).all()
    except Exception:
        ultimos_miembros = []
    finally:
        db_session.close()
    return render_template("index.html", a_index=False, ultimos_miembros=ultimos_miembros)


@app.route("/registro", methods=["GET", "POST"])
def registro():
    db_session = SessionLocal()
    comunas = []
    try:
        comunas = db_session.query(Comuna).order_by(Comuna.nombre).all()
    except Exception:
        comunas = []
    finally:
        db_session.close()

    if request.method == "GET":
        return render_template("registro.html", a_index=True, comunas=comunas)

    errores = validar_registro_servidor(request.form, request.files)
    if errores:
        return render_template("registro.html", a_index=True, comunas=comunas, errores=errores), 400

    nombre = request.form.get('nombre').strip()
    email = request.form.get('email').strip()
    telefono = request.form.get('telefono').strip()
    rol = request.form.get('rol')
    comuna_id = int(request.form.get('comuna'))
    nombre_actividad = request.form.get('nombre-actividad').strip()
    tipo = request.form.get('tipo')
    fecha_str = request.form.get('fecha')
    horas = str(int(request.form.get('horas')))
    descripcion = request.form.get('descripcion').strip()

    fecha_dt = datetime.fromisoformat(fecha_str)
    dias_semana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
    dia = dias_semana[fecha_dt.weekday()]
    hora_inicio = fecha_dt.strftime('%H:%M')

    db_session = SessionLocal()
    try:
        miembro = Miembro(
            nombre=nombre,
            email=email,
            telefono=telefono,
            rol=rol,
            comuna_id=comuna_id,
            fecha_registro=datetime.now()
        )
        db_session.add(miembro)
        db_session.flush()

        actividad = Actividad(
            miembro_id=miembro.id,
            dia=dia,
            hora_inicio=hora_inicio,
            duracion=horas,
            tipo=tipo,
            nombre=nombre_actividad,
            descripcion=descripcion
        )
        db_session.add(actividad)
        db_session.flush()

        fotos = request.files.getlist('fotos')
        for foto in fotos:
            if foto.filename == '':
                continue
            foto_data = foto.read()
            foto.seek(0)
            file_hash = hashlib.sha256(foto_data).hexdigest()
            kind = filetype.guess(foto_data)
            ext = kind.ext if kind else 'bin'
            unique_name = f"{file_hash}.{ext}"
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], unique_name)
            if not os.path.exists(filepath):
                foto.save(filepath)

            foto_db = Foto(
                ruta_archivo=filepath,
                nombre_archivo=unique_name,
                actividad_id=actividad.id
            )
            db_session.add(foto_db)

        db_session.commit()
        return render_template("confirmacion.html", a_index=False)
    except Exception as e:
        db_session.rollback()
        return render_template("registro.html", a_index=True, comunas=comunas, errores=["Error al guardar en la base de datos. Intente nuevamente."]), 500
    finally:
        db_session.close()


@app.route("/entradas", methods=["GET"])
def entradas():
    return render_template("entradas.html", a_index=True)


@app.route("/metricas", methods=["GET"])
def metricas():
    return render_template("metricas.html", a_index=True)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)