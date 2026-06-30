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