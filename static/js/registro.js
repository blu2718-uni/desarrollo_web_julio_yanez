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

const validarTelefono = (telefono) => {
    const regex = /^\+?[0-9\s\-]{8,15}$/;
    return regex.test(telefono)
}

const validarRol = (rol) => {
    return ["pregrado", "postgrado", "funcionario", "academico"].includes(rol)
}

const validarComuna = (comuna) => {
    return comuna !== "" && !isNaN(parseInt(comuna));
}

const validarNombreActividad = (nombreActividad) => {
    const nameRegex = /[0-9a-zA-ZáéíóúÁÉÍÓÚñÑüÜ!¡?¿\-_\. ]{1,128}/

    return nameRegex.test(nombreActividad)
}

const validarTipoActividad = (tipoActividad) => {
    return ["deporte", "recreación", "arte", "social", "tecnología", "otra"].includes(tipoActividad)
}

const validarDuracionActividad = (duracionActividad) => {
    return (duracionActividad > 0 && duracionActividad < 100)
}

const validarFotos = (fotos) => {
    if(fotos.files.length === 0 || fotos.files.length > 5){ return false }
    const tiposValidos = ["image/jpeg", "image/png"];
    for (let i = 0; i < fotos.files.length; i++) {
        if (fotos.files[i].size > 5000000) { return false }
        if (!tiposValidos.includes(fotos.files[i].type)) { return false }
    }
    return true
}

const validarEnlace = (enlace) => {
    const regex = /^(https?:\/\/)?(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}\.)+[a-zA-Z]{2,63}(?:\.[a-zA-Z]{2,63})?(?:\/.*)?$/;
    return regex.test(enlace.toString())
}

const validarDescripcion = (descripcion) => {
    return descripcion.trim().length > 0 && descripcion.length <= 500;
}

const validarRegistro = (event) => {
    event.preventDefault();
    let valid = true;
    let inputsInvalidos = [];

    const inputInvalido = (inputName) => {
        inputsInvalidos.push(inputName);
        valid &&= false;
    };

    const nombreUsuario = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const rol = document.getElementById("rol");
    const comuna = document.getElementById("comuna");
    const nombreActividad = document.getElementById("nombre-actividad");
    const tipoActividad = document.getElementById("tipo");
    const horas = document.getElementById("horas");
    const fotos = document.getElementById("fotos");
    const link = document.getElementById("link");
    const descripcion = document.getElementById("descripcion");

    if(!validarNombre(nombreUsuario.value.toString())){ inputInvalido("Nombre") }
    if(!validarCorreo(email.value.toString())){ inputInvalido("Correo") }
    if(!validarTelefono(telefono.value.toString())){ inputInvalido("Teléfono") }
    if(!validarRol(rol.value)){ inputInvalido("Rol") }
    if(!validarComuna(comuna.value)){ inputInvalido("Comuna") }
    if(!validarNombreActividad(nombreActividad.value.toString())){ inputInvalido("Nombre de la actividad") }
    if(!validarTipoActividad(tipoActividad.value)){ inputInvalido("Tipo de la actividad") }
    if(!validarDuracionActividad(parseInt(horas.value))){ inputInvalido("Duración de la actividad") }
    if(!validarFotos(fotos)){ inputInvalido("Fotos de la actividad") }
    if(!validarEnlace(link.value.toString())){ inputInvalido("Enlace relacionada a la actividad") }
    if(!validarDescripcion(descripcion.value)){ inputInvalido("Descripción de la actividad") }

    let statusValidacion = document.getElementById("validacion-registro");
    let mensajesValidacion = document.getElementById("mensajes-validacion");
    let listaValidacion = document.getElementById("lista-validacion");

    if(valid) {
        statusValidacion.hidden = true;
        document.getElementById("registro").submit();
    } else {
        listaValidacion.textContent = "";

        for (let input of inputsInvalidos) {
            let elementoLista = document.createElement("li");
            elementoLista.innerText = input;
            listaValidacion.append(elementoLista);
        }

        mensajesValidacion.innerText = "Los siguientes campos son inválidos o están vacios:";
        statusValidacion.hidden = false;
    }
}
