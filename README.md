La foto place holder fué extraido de  https://www.pexels.com/es-es/foto/cafe-taza-copa-ordenador-portatil-15924763/

Además, no agregué un campo extra/distinto dependiendo del rol que el usuario tenga dentro del departamento.

Sobre el sistema de tablas:

Al momento de cargar la pagina `/entradas`, Flask consulta la base de datos y genera dos archivos JSON estaticos en `static/js/`: `datos.json` (actividades) y `datos_miembros.json` (miembros).

Una vez cargada la pagina, el navegador hace `fetch()` de estos JSON y los guarda en variables globales (`window.data` y `window.miembrosData`). Los scripts `entradas.js` y `miembros.js` leen estas variables para construir las tablas con paginacion de 5 filas, ordenamiento por columnas y filtrado.

Si se hace click en una fila, el JS accede al indice del arreglo correspondiente y expande la informacion extra debajo de la tabla, incluyendo las actividades asociadas en el caso de los miembros.
