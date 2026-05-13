const filasPorPaginaMiembros = 5;
let paginaActualMiembros = 1;

const construirTablaMiembros = (pagina) => {
  const tabla = document.getElementById("miembros-datos");
  const primeraFila = (pagina - 1) * filasPorPaginaMiembros;
  const ultimaFila = primeraFila + filasPorPaginaMiembros;

  let entrada, nombre, email, telefono, comuna, rol;

  tabla.innerText = "";

  for (let i = primeraFila; i < ultimaFila; i++) {
    if (i >= miembrosData.length) break;
    entrada = document.createElement("tr");

    nombre = document.createElement("th");
    email = document.createElement("th");
    telefono = document.createElement("th");
    comuna = document.createElement("th");
    rol = document.createElement("th");

    nombre.textContent = miembrosData[i]["nombre"];
    email.textContent = miembrosData[i]["email"];
    telefono.textContent = miembrosData[i]["telefono"];
    comuna.textContent = miembrosData[i]["comuna"];
    rol.textContent = miembrosData[i]["rol"];

    const entradaId = "miembro-" + i;
    entrada.setAttribute("id", entradaId);
    entrada.onclick = function () { mostrarInfoMiembro(entradaId); };

    entrada.appendChild(nombre);
    entrada.appendChild(email);
    entrada.appendChild(telefono);
    entrada.appendChild(comuna);
    entrada.appendChild(rol);

    tabla.appendChild(entrada);
  }

  actualizarTablaMiembros(pagina);
};

const actualizarTablaMiembros = (paginaActual) => {
  const numeroPagina = Math.ceil(miembrosData.length / filasPorPaginaMiembros);
  const contenedorPaginas = document.getElementById("paginas-miembros");

  contenedorPaginas.innerHTML = "";

  for (let i = 1; i <= numeroPagina; i++) {
    const selectorPagina = document.createElement("a");
    selectorPagina.href = "#";
    selectorPagina.innerText = i;

    selectorPagina.onclick = function (e) {
      e.preventDefault();
      construirTablaMiembros(i);
      filtradoTablaMiembros();
      return false;
    };

    if (i === paginaActual) {
      selectorPagina.style.fontWeight = "bold";
    }

    contenedorPaginas.appendChild(selectorPagina);
    contenedorPaginas.appendChild(document.createTextNode(" "));
  }
};

const filtradoTablaMiembros = () => {
  let input = document.getElementById("filtro-rol-miembros");
  let filtro = input.value.toUpperCase();
  let tabla = document.getElementById("miembros-datos");
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
};

let ascendenteMiembros = true;
let ultimaColumnaOrdenadaMiembros = -1;

const ordenarTablaMiembros = (colIndex) => {
  const cuerpo = document.getElementById("miembros-datos");
  const filas = Array.from(cuerpo.rows);

  if (colIndex == ultimaColumnaOrdenadaMiembros) {
    ascendenteMiembros = !ascendenteMiembros;
  } else {
    ascendenteMiembros = true;
    ultimaColumnaOrdenadaMiembros = colIndex;
  }

  filas.sort((filaA, filaB) => {
    const valorA = filaA.cells[colIndex].textContent;
    const valorB = filaB.cells[colIndex].textContent;

    return ascendenteMiembros
      ? valorA.localeCompare(valorB)
      : valorB.localeCompare(valorA);
  });

  filas.forEach((fila) => cuerpo.appendChild(fila));
};

const mostrarInfoMiembro = (id) => {
  const info = document.getElementById("info-de-miembro");
  const indice = parseInt(id.split("-")[1]);

  info.innerHTML = "";

  const dato = document.createElement("div");
  dato.setAttribute("class", "dato-expandido-info");

  const nombreTitulo = document.createElement("h1");
  nombreTitulo.textContent = miembrosData[indice]["nombre"];

  const correo = document.createElement("p");
  correo.textContent = miembrosData[indice]["email"];

  const telefono = document.createElement("p");
  telefono.textContent = "Teléfono: " + miembrosData[indice]["telefono"];

  const comuna = document.createElement("p");
  comuna.textContent = "Comuna: " + miembrosData[indice]["comuna"];

  const rol = document.createElement("p");
  rol.textContent = "Rol: " + miembrosData[indice]["rol"];

  dato.appendChild(nombreTitulo);
  dato.appendChild(correo);
  dato.appendChild(telefono);
  dato.appendChild(comuna);
  dato.appendChild(rol);

  const actividadesTitulo = document.createElement("h2");
  actividadesTitulo.textContent = "Actividades:";
  dato.appendChild(actividadesTitulo);

  const lista = document.createElement("ul");
  lista.setAttribute("class", "dato-expandido-lista");

  const acts = miembrosData[indice]["actividades"];
  if (acts && acts.length > 0) {
    for (let a of acts) {
      const item = document.createElement("li");
      item.textContent = a["nombre"] + " - " + a["tipo"] + " - " + a["fecha"];
      lista.appendChild(item);
    }
  } else {
    const item = document.createElement("li");
    item.textContent = "No tiene actividades registradas.";
    lista.appendChild(item);
  }

  dato.appendChild(lista);
  info.appendChild(dato);
};
