// Referencias a elementos del DOM
const inputBusqueda = document.getElementById("q");
const contenedorResultados = document.getElementById("resultados");

// Estado para delay
let timerDebounce = null;

// Listener sobre el input con delay de 250ms
inputBusqueda.addEventListener("input", () => {
  const q = inputBusqueda.value.trim();
  clearTimeout(timerDebounce);
  if (q.length < 3) {
    limpiarResultados();
    return;
  }
  timerDebounce = setTimeout(() => buscar(q), 250);
});

// Busca actividades via fetch al endpoint /api/actividades
// Patrón reutilizado del auxiliar 10 (search-bar.js fetchAJAX)
async function buscar(q) {
  mostrarBuscando();
  try {
    const url = "/api/actividades?q=" + encodeURIComponent(q);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    renderResultados(data, q);
  } catch (error) {
    console.error("Error en la busqueda:", error);
    contenedorResultados.textContent = "Ocurrio un error al buscar.";
  }
}

// Limpia resultados (patron reutilizado del auxiliar 10 populateMatchList)
function limpiarResultados() {
  while (contenedorResultados.firstChild) {
    contenedorResultados.removeChild(contenedorResultados.firstChild);
  }
}

function mostrarBuscando() {
  limpiarResultados();
  const p = document.createElement("p");
  p.className = "buscando";
  p.textContent = "Buscando...";
  contenedorResultados.appendChild(p);
}

// Renderiza la lista de resultados o el mensaje de "sin resultados"
function renderResultados(actividades, q) {
  limpiarResultados();

  if (!actividades || actividades.length === 0) {
    const p = document.createElement("p");
    p.className = "sin-resultados";
    p.textContent = "No se encontraron actividades que coincidan con tu búsqueda.";
    contenedorResultados.appendChild(p);
    return;
  }

  for (const a of actividades) {
    const card = crearTarjeta(a, q);
    contenedorResultados.appendChild(card);
  }
}

// Crea una tarjeta por cada actividad con todos los campos del enunciado
function crearTarjeta(a, q) {
  const card = document.createElement("div");
  card.className = "resultado-card";
  card.dataset.actividadId = a.id;

  const titulo = document.createElement("h2");
  titulo.className = "resultado-titulo";
  appendTextoResaltado(titulo, a.nombre, q);
  card.appendChild(titulo);

  const grid = document.createElement("dl");
  grid.className = "resultado-grid";

  const campos = [
    ["Miembro", a.miembroNombre],
    ["Día", a.dia],
    ["Tipo", a.tipo],
    ["Comuna", a.comunaNombre],
    ["Descripción", a.descripcion],
  ];

  for (const [etiqueta, valor] of campos) {
    const dt = document.createElement("dt");
    dt.textContent = etiqueta;

    const dd = document.createElement("dd");
    if (valor === null || valor === undefined || valor === "") {
      dd.textContent = "—";
    } else {
      appendTextoResaltado(dd, valor, q);
    }

    grid.appendChild(dt);
    grid.appendChild(dd);
  }

  card.appendChild(grid);

  const actions = document.createElement("div");
  actions.className = "resultado-actions";

  const notaLabel = document.createElement("span");
  notaLabel.className = "nota-label";
  notaLabel.textContent = "Nota: ";
  actions.appendChild(notaLabel);

  const notaValor = document.createElement("span");
  notaValor.className = "nota-valor";
  notaValor.textContent = a.nota;
  actions.appendChild(notaValor);

  const btnEvaluar = document.createElement("button");
  btnEvaluar.type = "button";
  btnEvaluar.className = "btn-evaluar";
  btnEvaluar.textContent = "Evaluar";
  btnEvaluar.dataset.actividadId = a.id;
  btnEvaluar.addEventListener("click", abrirDialogEvaluar);
  actions.appendChild(btnEvaluar);

  card.appendChild(actions);
  return card;
}

// Pasa un texto campo por campo, resaltando ocurrencias del patron q
function appendTextoResaltado(contenedor, texto, q) {
  resaltar(contenedor, texto, q);
}

// Resalta ocurrencias case-insensitive del patron q dentro de texto,
// enviando nodos text y <mark> al contenedor. No usa innerHTML (anti-XSS).
function resaltar(contenedor, texto, q) {
  if (!texto) {
    return;
  }
  const textoStr = String(texto);
  const patron = q.toLowerCase();
  const textoLower = textoStr.toLowerCase();
  let i = 0;
  let idx = textoLower.indexOf(patron, i);

  while (idx !== -1) {
    if (idx > i) {
      contenedor.appendChild(
        document.createTextNode(textoStr.slice(i, idx))
      );
    }
    const mark = document.createElement("mark");
    mark.textContent = textoStr.slice(idx, idx + patron.length);
    contenedor.appendChild(mark);
    i = idx + patron.length;
    idx = textoLower.indexOf(patron, i);
  }
  if (i < textoStr.length) {
    contenedor.appendChild(
      document.createTextNode(textoStr.slice(i))
    );
  }
}

// Referencias al dialog de evaluacion (definido en buscar.html)
const dialogEvaluar = document.getElementById("dialog-evaluar");
const selectNota = document.getElementById("nota-select");
const dialogError = document.getElementById("dialog-error");
const btnConfirmar = document.getElementById("dialog-confirmar");
const btnCancelar = document.getElementById("dialog-cancelar");

// Actividad que se esta evaluando en el dialog actualmente
let actividadEvaluandoId = null;

// Abre el dialog para evaluar una actividad
function abrirDialogEvaluar(event) {
  actividadEvaluandoId = event.currentTarget.dataset.actividadId;
  selectNota.value = "";
  dialogError.hidden = true;
  dialogError.textContent = "";
  dialogEvaluar.showModal();
}

// Cierra el dialog y resetea el estado
function cerrarDialogEvaluar() {
  actividadEvaluandoId = null;
  selectNota.value = "";
  dialogError.hidden = true;
  dialogError.textContent = "";
  dialogEvaluar.close();
}

// Listener del boton cancelar
btnCancelar.addEventListener("click", cerrarDialogEvaluar);

// Listener del boton confirmar: valida, POST, actualiza UI
btnConfirmar.addEventListener("click", async () => {
  if (actividadEvaluandoId === null) {
    return;
  }
  const notaStr = selectNota.value;
  if (notaStr === "") {
    dialogError.textContent = "Debes seleccionar una nota.";
    dialogError.hidden = false;
    return;
  }
  const nota = parseInt(notaStr, 10);
  if (isNaN(nota) || nota < 1 || nota > 7) {
    dialogError.textContent = "La nota debe ser un entero entre 1 y 7.";
    dialogError.hidden = false;
    return;
  }

  // POST /api/notas con JSON {actividadId, nota}
  try {
    const response = await fetch("/api/notas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        actividadId: parseInt(actividadEvaluandoId, 10),
        nota: nota,
      }),
    });

    if (response.status === 400) {
      const data = await response.json();
      dialogError.textContent = data.error || "Nota invalida.";
      dialogError.hidden = false;
      return;
    }
    if (response.status === 404) {
      dialogError.textContent = "La actividad no existe.";
      dialogError.hidden = false;
      return;
    }
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    actualizarNotaEnUI(actividadEvaluandoId, data.nota);
    cerrarDialogEvaluar();
  } catch (error) {
    console.error("Error al evaluar:", error);
    dialogError.textContent = "Ocurrio un error al guardar la nota.";
    dialogError.hidden = false;
  }
});

// Actualiza el span .nota-valor de la tarjeta correspondiente
function actualizarNotaEnUI(actividadId, nuevaNota) {
  const selector = '.resultado-card[data-actividad-id="' + actividadId + '"] .nota-valor';
  const spanNota = document.querySelector(selector);
  if (spanNota) {
    spanNota.textContent = nuevaNota;
  }
}