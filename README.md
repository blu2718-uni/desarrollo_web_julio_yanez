La foto place holder fué extraido de  https://www.pexels.com/es-es/foto/cafe-taza-copa-ordenador-portatil-15924763/

Además, no agregué un campo extra/distinto dependiendo del rol que el usuario tenga dentro del departamento.

Sobre el sistema de tablas:

Al momento de cargar la pagina `/entradas`, Flask consulta la base de datos y genera dos archivos JSON estaticos en `static/js/`: `datos.json` (actividades) y `datos_miembros.json` (miembros).

Una vez cargada la pagina, el navegador hace `fetch()` de estos JSON y los guarda en variables globales (`window.data` y `window.miembrosData`). Los scripts `entradas.js` y `miembros.js` leen estas variables para construir las tablas con paginacion de 5 filas, ordenamiento por columnas y filtrado.

Si se hace click en una fila, el JS accede al indice del arreglo correspondiente y expande la informacion extra debajo de la tabla, incluyendo las actividades asociadas en el caso de los miembros.

Los gráficos se hicieron con Highcharts vía CDN. Tres endpoints JSON (`/estadisticas/*`) consumidos con `fetch()`.

Se agregó la tabla `comentario` con SQLAlchemy. Endpoints:
- `GET /comentarios/<id>` devuelve lista.
- `POST /comentarios` recibe `FormData`, valida, guarda en DB.

En la validación del cliente se chequeó el nombre de 3–80 chars y el texto ≥5 chars Para la validación en el servidor, se chequearon las mismas reglas + `html.escape()` para XSS.

Se agregó `"id"` al JSON de `/entradas` para usar `actividad_id` real en los comentarios.

Los comentarios se cargan y envían de forma asíncrona dentro del panel expandido de cada actividad, sin recargar la página. El formulario se genera dinámicamente junto con la lista de comentarios previos al hacer click en una fila de la tabla.

Los endpoints de estadísticas agrupan datos con SQLAlchemy `func.count` y `group_by`, devolviendo JSON plano que el frontend transforma con bucles `for...of` antes de pasarlos a Highcharts.
