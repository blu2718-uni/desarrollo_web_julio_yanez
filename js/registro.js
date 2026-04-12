const validarNombre = (nombre) => {
    const regex = /[A-ZÁÉÍÓÚÑÜ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]{1,16}\s[A-ZÁÉÍÓÚÑÜ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]{1,16}\s[A-ZÁÉÍÓÚÑÜ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]{1,16}/;
    return regex.test(nombre)
}

const validarCorreo = (correo) => {
    if(!correo.includes("@")){ return false }
    
    const domainRegex = /(\bug\b|\bdcc\b|\bing\b)\b\.uchile\.cl/
    const nameRegex = /[0-9a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\.\-_]{1,32}/
    
    return domainRegex.test(correo.split("@")[1]) && nameRegex.test(correo.split("@")[0])
}

const validarRol = (rol) => {
    return ["pregrado", "postgrado", "funcionario", "academico"].includes(rol)
}

const validarNombreActividad = (nombreActividad) => {
    const nameRegex = /[0-9a-zA-ZáéíóúÁÉÍÓÚñÑüÜ!¡?¿\-_\. ]{1,128}/

    return nameRegex.test(nombreActividad)
}

const validarTipoActividad = (tipoActividad) => {
    return ["deportiva", "recreativa", "artistica", "social", "tecnologica", "otro"].includes(tipoActividad)
}

const validarDuracionActividad = (duracionActividad) => {
    return (duracionActividad > 0 && duracionActividad < 100)
}

const validarMedios = (medios) => {
    if(medios.files[0] === undefined){ return false }
    if(medios.files[0].size > 5000000){ return false }
    if(!["image/jpeg","image/png"].includes(medios.files[0].type)){ return false }
    
    return true
}

const validarEnlace = (enlace) => {
    const regex = /^(https?:\/\/)?(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}\.)+[a-zA-Z]{2,63}(?:\.[a-zA-Z]{2,63})?(?:\/.*)?$/;
    return regex.test(enlace.toString())
}

const validarRegistro = (event) => {
    event.preventDefault();
    let valid = true;

    const nombreUsuario = document.getElementById("nombre");
    const email = document.getElementById("email");
    const rol = document.getElementById("rol");
    const nombreActividad = document.getElementById("nombre-actividad");
    const tipoActividad = document.getElementById("tipo");
    const horas = document.getElementById("horas");
    const medios = document.getElementById("medios");
    const link = document.getElementById("link");

    if(!validarNombre(nombreUsuario.value.toString())){ valid = false }
    if(!validarCorreo(email.value.toString())){ valid = false }
    if(!validarRol(rol.value)){ valid = false }
    if(!validarNombreActividad(nombreActividad.value.toString())){ valid = false }
    if(!validarTipoActividad(tipoActividad.value)){ valid = false }
    if(!validarDuracionActividad(parseInt(horas.value))){ valid = false }
    if(!validarMedios(medios)){ valid = false }
    if(!validarEnlace(link.value.toString())){ valid = false }

    if(valid) {
        alert("Su entrada ha quedado registrada. Se le redirigirá a la página principal.")
        window.location.href = "./index.html";
    } else {
        alert("Entrada inválida")
    }
}
