const filasPorPagina = 5;
let paginaActual = 1;

const construirTabla = (pagina) => {
  const tabla = document.getElementById("entradas-datos");
  const primeraFila = (pagina - 1) * filasPorPagina;
  const ultimaFila = primeraFila + filasPorPagina;

  let entrada, nombre, correo, rol, actividadNombre, actividadTipo, actividadFecha
  
  tabla.innerText = "";

  for (let i = primeraFila; i < ultimaFila; i++) {
    if (i >= data.length) break;
    entrada = document.createElement("tr");
    
    nombre = document.createElement("th");
    correo = document.createElement("th");
    rol = document.createElement("th");
    actividadNombre = document.createElement("th");
    actividadTipo = document.createElement("th");
    actividadFecha = document.createElement("th");

    nombre.textContent = data[i]["nombre"]
    correo.textContent = data[i]["email"]
    rol.textContent = data[i]["rol"]
    actividadNombre.textContent = data[i]["nombre-actividad"]
    actividadTipo.textContent = data[i]["tipo"]
    actividadFecha.textContent = data[i]["fecha"]
    
    const entradaId = "entrada-"+i 
    entrada.setAttribute("id", entradaId)
    entrada.onclick = function() { mostrarInfo(entradaId) }
    
    entrada.appendChild(nombre);
    entrada.appendChild(correo);
    entrada.appendChild(rol);
    entrada.appendChild(actividadNombre);
    entrada.appendChild(actividadTipo);
    entrada.appendChild(actividadFecha);

    
    tabla.appendChild(entrada)
  }

  actualizarTabla(pagina);
}

const actualizarTabla = (paginaActual) => {
  const numeroPagina = Math.ceil(data.length / filasPorPagina);
  const contenedorPaginas = document.getElementById("paginas");
  
  contenedorPaginas.innerHTML = "";

  for (let i = 1; i <= numeroPagina; i++) {
    const selectorPagina = document.createElement("a");
    selectorPagina.href = "#"
    selectorPagina.innerText = i;

    selectorPagina.onclick = function (e) {
      e.preventDefault();
      construirTabla(i);
      filtradoTabla();
      return false;
    };
    
    if (i === paginaActual) {
      selectorPagina.style.fontWeight = "bold";
    }
    
    contenedorPaginas.appendChild(selectorPagina);
    contenedorPaginas.appendChild(document.createTextNode(" "));
  }
}

// Código de filtrado original extraido de https://www.w3schools.com/howto/howto_js_filter_table.asp

const filtradoTabla = () => {
  let input = document.getElementById("filtro-tipo");
  let filtro = input.value.toUpperCase();
  let tabla = document.getElementById("entradas-datos");
  let tr = tabla.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("th")[4];
    if (td) {
      let valorCelda = td.innerText.toUpperCase();
      if (filtro === "" || valorCelda === filtro) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

ascendente = true;
ultimaColumnaOrdenada = -1;

const ordenarTabla = (colIndex) => {
    const cuerpo = document.getElementById("entradas-datos");
    const filas = Array.from(cuerpo.rows);

    if (colIndex == ultimaColumnaOrdenada) {
      ascendente = !ascendente;
    } else {
      ascendente = true;
      ultimaColumnaOrdenada = colIndex;
    }

    filas.sort((filaA, filaB) => {
      const valorA = filaA.cells[colIndex].textContent;
      const valorB = filaB.cells[colIndex].textContent;
      let aCompararA, aCompararB, resultado

      if (colIndex === 6) {
        // Comparación numérica para las horas
        aCompararA = +valorA;
        aCompararB = +valorB;
        resultado = ascendente ? aCompararA - aCompararB : aCompararB - aCompararA;
        return resultado

      } if (colIndex === 5) {
        aCompararA = valorA.split(" a las ")[0]+"-"+valorA.split(" a las ")[1];
        aCompararB = valorB.split(" a las ")[0]+"-"+valorB.split(" a las ")[1];
        resultado = ascendente ? aCompararA.localeCompare(aCompararB) : aCompararB.localeCompare(aCompararA);
        return resultado

      } else {
        let resultado = ascendente ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
        return resultado
      }
    });

    filas.forEach(fila => cuerpo.appendChild(fila));
}

const cargarComentarios = (actividad_id, indice) => {
  fetch('/comentarios/' + actividad_id)
    .then(r => r.json())
    .then(datos => {
      const lista = document.getElementById('lista-comentarios-' + indice);
      lista.innerHTML = '';

      if (datos.length === 0) {
        lista.innerHTML = '<li>Aún no hay comentarios.</li>';
        return;
      }

      for (const c of datos) {
        const item = document.createElement('li');
        item.textContent = '[' + c.fecha + '] ' + c.nombre + ': ' + c.texto;
        lista.appendChild(item);
      }
    })
    .catch(() => {
      const lista = document.getElementById('lista-comentarios-' + indice);
      lista.innerHTML = '<li style="color:red;">Error al cargar comentarios.</li>';
    });
}

const enviarComentario = (event, indice) => {
  event.preventDefault();

  const form = event.target;
  const errorDiv = document.getElementById('error-comentario-' + indice);
  errorDiv.style.display = 'none';
  errorDiv.innerHTML = '';

  const formData = new FormData(form);
  const nombre = formData.get('nombre').trim();
  const texto = formData.get('texto').trim();

  const errores = [];
  if (nombre.length < 3 || nombre.length > 80) {
    errores.push('El nombre debe tener entre 3 y 80 caracteres.');
  }
  if (texto.length < 5) {
    errores.push('El comentario debe tener al menos 5 caracteres.');
  }

  if (errores.length > 0) {
    errorDiv.innerHTML = errores.join('<br>');
    errorDiv.style.display = 'block';
    return;
  }

  fetch('/comentarios', {
    method: 'POST',
    body: formData
  })
    .then(r => r.json())
    .then(respuesta => {
      if (respuesta.exito) {
        form.reset();
        const actividad_id = formData.get('actividad_id');
        cargarComentarios(actividad_id, indice);
      } else {
        errorDiv.innerHTML = respuesta.errores.join('<br>');
        errorDiv.style.display = 'block';
      }
    })
    .catch(() => {
      errorDiv.innerHTML = 'Error de red al enviar el comentario.';
      errorDiv.style.display = 'block';
    });
}

const mostrarInfo = (id) => {
  const info = document.getElementById("info-de-dato");
  const indice = parseInt(id.split("-")[1]);

  info.innerHTML = "";

  const dato = document.createElement("div");
  dato.setAttribute("class", "dato-expandido-info");
  
  const lista = document.createElement("ul");
  lista.setAttribute("class", "dato-expandido-lista");
  
  const actividadNombre = document.createElement("h1");
  const nombre = document.createElement("p");
  const correo = document.createElement("p");
  const rol = document.createElement("li");
  const actividadTipo = document.createElement("li");
  const actividadFecha = document.createElement("li");
  const actividadDuracion = document.createElement("li");
  const actividadEnlace = document.createElement("p");
  const enlace = document.createElement("a")
  
  actividadNombre.textContent = data[indice]["nombre-actividad"];
  nombre.textContent = "Registro de "+data[indice]["nombre"];
  correo.textContent = data[indice]["email"];
  rol.textContent = (data[indice]["rol"] === "Pregrado" || data[indice]["rol"] === "Postgrado") ? "Rol dentro de la universidad: Estudiante de "+data[indice]["rol"] : "Rol dentro de la universidad: "+data[indice]["rol"];
  actividadTipo.textContent = "Actividad de tipo: "+data[indice]["tipo"];
  actividadFecha.textContent = "Fecha de la actividad: " + data[indice]["fecha"];
  actividadDuracion.textContent = "Duración en horas: "+data[indice]["horas"].toString()+" hrs";
  actividadEnlace.innerHTML = enlace;
  enlace.href = data[indice]["link"].toString();
  enlace.textContent = "Enlace";
  
  actividadEnlace.appendChild(enlace);
  
  dato.appendChild(actividadNombre);
  dato.appendChild(nombre);
  dato.appendChild(correo);
  lista.appendChild(rol);
  lista.appendChild(actividadTipo);
  lista.appendChild(actividadFecha);
  lista.appendChild(actividadDuracion);
  dato.appendChild(lista)
  dato.appendChild(actividadEnlace);
  
  info.appendChild(dato);

  const fig = document.createElement("figure");
  const figDesc = document.createElement("figcaption");
  const img = document.createElement("img");
  
  if (data[indice]["fotos"] && data[indice]["fotos"].length > 0) {
    img.src = data[indice]["fotos"][0];
    figDesc.textContent = "Imagen de la actividad";
  } else {
    img.src = "/static/img/placeholder.jpg";
    figDesc.textContent = "Imagen de la actividad";
  }
  img.setAttribute("class", "dato-expandido-img");
  img.setAttribute("alt", "Imagen de la actividad");
  img.setAttribute("title", "Imagen de la actividad");
  
  fig.appendChild(img);
  fig.appendChild(figDesc);
  info.appendChild(fig);
}
