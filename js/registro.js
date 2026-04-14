const params = new URLSearchParams(window.location.search);

if (params.has("nombre")) {
    document.getElementById("nombre").value = decodeURIComponent(params.get('nombre'));               
    document.getElementById("email").value = decodeURIComponent(params.get('email'));
    document.getElementById("rol").value = decodeURIComponent(params.get('rol'));
}

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
    let inputsInvalidos = [];

    // Codigo original de la caja con información de la validación sacado del tercer auxiliar.

    const inputInvalido = (inputName) => {
        inputsInvalidos.push(inputName);
        valid &&= false;
    };

    const nombreUsuario = document.getElementById("nombre");
    const email = document.getElementById("email");
    const rol = document.getElementById("rol");
    const nombreActividad = document.getElementById("nombre-actividad");
    const tipoActividad = document.getElementById("tipo");
    const horas = document.getElementById("horas");
    const medios = document.getElementById("medios");
    const link = document.getElementById("link");

    if(!validarNombre(nombreUsuario.value.toString())){ inputInvalido("Nombre") }
    if(!validarCorreo(email.value.toString())){ inputInvalido("Correo") }
    if(!validarRol(rol.value)){ inputInvalido("Rol") }
    if(!validarNombreActividad(nombreActividad.value.toString())){ inputInvalido("Nombre de la actividad") }
    if(!validarTipoActividad(tipoActividad.value)){ inputInvalido("Tipo de la actividad") }
    if(!validarDuracionActividad(parseInt(horas.value))){ inputInvalido("Duración de la actividad") }
    if(!validarMedios(medios)){ inputInvalido("Multimedia relacionada a la actividad") }
    if(!validarEnlace(link.value.toString())){ inputInvalido("Enlace relacionada a la actividad") }

    let statusValidacion = document.getElementById("validacion-registro");
    let mensajesValidacion = document.getElementById("mensajes-validacion");
    let listaValidacion = document.getElementById("lista-validacion");

    if(valid) {
        const nombreUsuarioClean = encodeURIComponent(nombreUsuario.value);
        const emailClean = encodeURIComponent(email.value);
        const rolClean = encodeURIComponent(rol.value);

        statusValidacion.hidden = true;
        window.location.href = `./confirmacion.html?nombre=${nombreUsuarioClean}&email=${emailClean}&rol=${rolClean}`;
    } else {
        listaValidacion.textContent = "";

        for (input of inputsInvalidos) {
            let elementoLista = document.createElement("li");
            elementoLista.innerText = input;
            listaValidacion.append(elementoLista);
        }

        mensajesValidacion.innerText = "Los siguientes campos son inválidos o están vacios:";

        statusValidacion.style.backgroundColor = "#ffdddd";
        statusValidacion.hidden = false;
    }
}
