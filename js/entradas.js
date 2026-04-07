const data = [
  {
    nombre: "María José González",
    email: "mjgonzalez@ug.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Campeonato de Fútbol Sala",
    tipo: "Deportiva",
    fecha: "2024-03-15T14:30",
    horas: 3,
    link: "https://deportes.uchile.cl/futbol-sala-primavera"
  },
  {
    nombre: "Juan Carlos Rodríguez",
    email: "jc.rodriguez@ing.uchile.cl",
    rol: "Académico",
    "nombre-actividad": "Taller de Robótica Avanzada",
    tipo: "Tecnológica",
    fecha: "2024-04-20T10:00",
    horas: 4,
    link: "https://ingenieria.uchile.cl/robotica-avanzada"
  },
  {
    nombre: "Ana Patricia López",
    email: "apalopez@dcc.uchile.cl",
    rol: "Postgrado",
    "nombre-actividad": "Exposición de Arte Digital",
    tipo: "Artística",
    fecha: "2024-05-10T16:00",
    horas: 2,
    link: "https://dcc.uchile.cl/arte-digital-2024"
  },
  {
    nombre: "Pedro Antonio Soto",
    email: "pasoto@ug.uchile.cl",
    rol: "Funcionario",
    "nombre-actividad": "Jornada de Integración Laboral",
    tipo: "Social",
    fecha: "2024-06-05T09:00",
    horas: 8,
    link: "https://www.uchile.cl/bienestar/integracion"
  },
  {
    nombre: "Camila Andrea Silva",
    email: "casilva@ing.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Torneo de Ajedrez Interfacultades",
    tipo: "Recreativa",
    fecha: "2024-07-12T15:00",
    horas: 5,
    link: "https://centroestudiantes.ing.uchile.cl/ajedrez"
  },
  {
    nombre: "Diego Sebastián Martínez",
    email: "dsmartinez@dcc.uchile.cl",
    rol: "Postgrado",
    "nombre-actividad": "Hackathon de Inteligencia Artificial",
    tipo: "Tecnológica",
    fecha: "2024-03-22T09:30",
    horas: 12,
    link: "https://dcc.uchile.cl/hackathon-ia"
  },
  {
    nombre: "Francisca Valentina Muñoz",
    email: "fvmunoz@ug.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Taller de Fotografía Artística",
    tipo: "Artística",
    fecha: "2024-08-14T10:00",
    horas: 3,
    link: "https://artes.uchile.cl/taller-fotografia"
  },
  {
    nombre: "Nicolás Cristóbal Rojas",
    email: "ncrojas@ing.uchile.cl",
    rol: "Académico",
    "nombre-actividad": "Clínica de Rugby Universitario",
    tipo: "Deportiva",
    fecha: "2024-09-03T16:30",
    horas: 2,
    link: "https://deportes.uchile.cl/rugby-clinica"
  },
  {
    nombre: "Daniela Constanza Díaz",
    email: "dcdiaz@dcc.uchile.cl",
    rol: "Funcionario",
    "nombre-actividad": "Voluntariado Comunitario",
    tipo: "Social",
    fecha: "2024-04-12T08:00",
    horas: 6,
    link: "https://www.uchile.cl/extension/voluntariado"
  },
  {
    nombre: "Lucas Joaquín Pérez",
    email: "ljperez@ug.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Maratón de Programación",
    tipo: "Tecnológica",
    fecha: "2024-05-25T13:00",
    horas: 4,
    link: "https://beauchef.uchile.cl/maraton-programacion"
  },
  {
    nombre: "Santiago Benjamín Contreras",
    email: "sbcontreras@ing.uchile.cl",
    rol: "Postgrado",
    "nombre-actividad": "Festival de Música Indie",
    tipo: "Artística",
    fecha: "2024-06-18T19:00",
    horas: 4,
    link: "https://cultural.uchile.cl/festival-indie"
  },
  {
    nombre: "Martina Alejandra Castillo",
    email: "macastillo@dcc.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Encuentro de Juegos de Mesa",
    tipo: "Recreativa",
    fecha: "2024-07-05T17:30",
    horas: 3,
    link: "https://dcc.uchile.cl/juegos-mesa"
  },
  {
    nombre: "Mateo Maximiliano Sepúlveda",
    email: "msepulveda@ug.uchile.cl",
    rol: "Académico",
    "nombre-actividad": "Natación Adaptada Inclusiva",
    tipo: "Deportiva",
    fecha: "2024-08-22T11:00",
    horas: 2,
    link: "https://deportes.uchile.cl/natacion-adaptada"
  },
  {
    nombre: "Florencia Antonia Ramírez",
    email: "framirez@ing.uchile.cl",
    rol: "Funcionario",
    "nombre-actividad": "Taller de Oratoria y Debate",
    tipo: "Social",
    fecha: "2024-09-10T15:00",
    horas: 3,
    link: "https://www.uchile.cl/formacion/oratoria"
  },
  {
    nombre: "Gaspar Tomás Morales",
    email: "gtmorales@dcc.uchile.cl",
    rol: "Postgrado",
    "nombre-actividad": "Conferencia de Realidad Virtual",
    tipo: "Tecnológica",
    fecha: "2024-03-08T09:00",
    horas: 5,
    link: "https://dcc.uchile.cl/vr-conferencia"
  },
  {
    nombre: "Victoria Emma Torres",
    email: "vetorres@ug.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Exhibición de Danza Contemporánea",
    tipo: "Artística",
    fecha: "2024-04-28T18:30",
    horas: 2,
    link: "https://artes.uchile.cl/danza-contemporanea"
  },
  {
    nombre: "Emilio Agustín Vargas",
    email: "eavargas@ing.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Torneo de Vóleibol Mixto",
    tipo: "Deportiva",
    fecha: "2024-05-16T14:00",
    horas: 4,
    link: "https://deportes.uchile.cl/voleibol-mixto"
  },
  {
    nombre: "Alonso Emilio Fuentes",
    email: "aefuentes@dcc.uchile.cl",
    rol: "Académico",
    "nombre-actividad": "Cine al Aire Libre: Clásicos",
    tipo: "Recreativa",
    fecha: "2024-06-20T20:00",
    horas: 3,
    link: "https://cultural.uchile.cl/cine-libre"
  },
  {
    nombre: "Patricia Alejandra Valenzuela",
    email: "pavalenzuela@ug.uchile.cl",
    rol: "Funcionario",
    "nombre-actividad": "Taller de Escultura en Piedra",
    tipo: "Artística",
    fecha: "2024-07-30T10:30",
    horas: 6,
    link: "https://artes.uchile.cl/escultura-piedra"
  },
  {
    nombre: "Catalina Belén Araya",
    email: "cbaraya@ing.uchile.cl",
    rol: "Postgrado",
    "nombre-actividad": "Seminario de Blockchain y Cripto",
    tipo: "Tecnológica",
    fecha: "2024-08-08T11:30",
    horas: 4,
    link: "https://ingenieria.uchile.cl/blockchain-seminario"
  },
  {
    nombre: "Benjamín Nicolás Carrasco",
    email: "bncarrasco@dcc.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Capacitación en Primeros Auxilios",
    tipo: "Social",
    fecha: "2024-09-14T09:00",
    horas: 4,
    link: "https://www.uchile.cl/seguridad/primeros-auxilios"
  },
  {
    nombre: "Javiera Ignacia Cortés",
    email: "jicortes@ug.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Competencia de E-Sports: Valorant",
    tipo: "Deportiva",
    fecha: "2024-03-29T15:30",
    horas: 6,
    link: "https://deportes.uchile.cl/esports-valorant"
  },
  {
    nombre: "Cristóbal Andrés Herrera",
    email: "caherrera@ing.uchile.cl",
    rol: "Postgrado",
    "nombre-actividad": "Taller de Origami Avanzado",
    tipo: "Artística",
    fecha: "2024-04-18T16:00",
    horas: 2,
    link: "https://cultural.uchile.cl/origami"
  },
  {
    nombre: "Antonia Sofía Medina",
    email: "asmedina@dcc.uchile.cl",
    rol: "Funcionario",
    "nombre-actividad": "Networking para Innovación",
    tipo: "Otro",
    fecha: "2024-05-22T18:00",
    horas: 3,
    link: "https://innovacion.uchile.cl/networking"
  },
  {
    nombre: "Maximiliano José Miranda",
    email: "mjmiranda@ug.uchile.cl",
    rol: "Académico",
    "nombre-actividad": "Clase Magistral de IoT Industrial",
    tipo: "Tecnológica",
    fecha: "2024-06-12T10:00",
    horas: 2,
    link: "https://beauchef.uchile.cl/iot-magistral"
  },
  {
    nombre: "Agustín Diego Figueroa",
    email: "adfigueroa@ing.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Escape Room Matemático",
    tipo: "Recreativa",
    fecha: "2024-07-19T17:00",
    horas: 2,
    link: "https://centroestudiantes.ing.uchile.cl/escape-room"
  },
  {
    nombre: "Gaspar Alonso Jara",
    email: "gajara@dcc.uchile.cl",
    rol: "Postgrado",
    "nombre-actividad": "Atletismo: Carrera 5K Campus",
    tipo: "Deportiva",
    fecha: "2024-08-25T08:30",
    horas: 2,
    link: "https://deportes.uchile.cl/carrera-5k"
  },
  {
    nombre: "Tomás Sebastián Sandoval",
    email: "tssandoval@ug.uchile.cl",
    rol: "Funcionario",
    "nombre-actividad": "Ceremonia de Reconocimiento",
    tipo: "Social",
    fecha: "2024-09-05T16:00",
    horas: 2,
    link: "https://www.uchile.cl/direccion/reconocimiento"
  },
  {
    nombre: "Valentina Constanza Vega",
    email: "vcvega@ing.uchile.cl",
    rol: "Pregrado",
    "nombre-actividad": "Taller de Podcast y Radio",
    tipo: "Otro",
    fecha: "2024-03-11T14:30",
    horas: 3,
    link: "https://comunicaciones.uchile.cl/taller-podcast"
  },
  {
    nombre: "Joaquín Lucas Tapia",
    email: "jltapia@dcc.uchile.cl",
    rol: "Académico",
    "nombre-actividad": "Paintball Estratégico",
    tipo: "Recreativa",
    fecha: "2024-04-05T11:00",
    horas: 4,
    link: "https://deportes.uchile.cl/paintball"
  }
];

// Código de paginado original extraido de https://www.geeksforgeeks.org/html/how-to-add-pagination-in-html-table/

const filasPorPagina = 5;
let paginaActual = 1;

const construirTabla = (pagina) => {
  const tabla = document.getElementById("entradas-datos");
  const primeraFila = (pagina - 1) * filasPorPagina;
  const ultimaFila = primeraFila + filasPorPagina;

  tabla.innerText = "";

  for (let i = primeraFila; i < ultimaFila; i++) {
    let entrada = document.createElement("tr");
    
    let nombre = document.createElement("th");
    let correo = document.createElement("th");
    let rol = document.createElement("th");
    let actividadNombre = document.createElement("th");
    let actividadTipo = document.createElement("th");
    let actividadFecha = document.createElement("th");
    let actividadDuracion = document.createElement("th");
    let actividadEnlace = document.createElement("th");
    
    nombre.textContent = data[i]["nombre"]
    correo.textContent = data[i]["email"]
    rol.textContent = data[i]["rol"]
    actividadNombre.textContent = data[i]["nombre-actividad"]
    actividadTipo.textContent = data[i]["tipo"]
    actividadFecha.textContent = Date(data[i]["fecha"]).toString()
    actividadDuracion.textContent = data[i]["horas"].toString()
    actividadEnlace.textContent =  data[i]["link"].toString()
    
    entrada.appendChild(nombre);
    entrada.appendChild(correo);
    entrada.appendChild(rol);
    entrada.appendChild(actividadNombre);
    entrada.appendChild(actividadTipo);
    entrada.appendChild(actividadFecha);
    entrada.appendChild(actividadDuracion);
    entrada.appendChild(actividadEnlace);
    
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

    selectorPagina.onclick = function () {
      construirTabla(i);
      filtradoTabla();
    };
    
    if (i === paginaActual) {
      selectorPagina.style.fontWeight = "bold";
    }
    
    contenedorPaginas.appendChild(selectorPagina);
    contenedorPaginas.appendChild(document.createTextNode(" "));
  }
}

construirTabla(paginaActual)

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

const ordenarTabla = (indice) => {
  let rows, switching, i, x, y, shouldSwitch, dir;
  let switchcount = 0;
  let table = document.getElementById("entradas-datos");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < rows.length-1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("th")[indice];
      y = rows[i + 1].getElementsByTagName("th")[indice];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toUpperCase() > y.innerHTML.toUpperCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}