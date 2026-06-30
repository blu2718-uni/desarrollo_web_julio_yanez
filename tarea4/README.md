La tarea es un proyecto Spring Boot (Java 21) que convive con la aplicación
Flask del repositorio: comparten la base de datos `tarea2` pero corren por
separado (Flask en `:5000`, Spring Boot en `:8081`).

Crear la tabla `nota` (una vez):

```
mysql -u cc5002 -p tarea2 < database/tabla-nota.sql
```

En cuanto a decisiones:

- `ddl-auto=none`: Hibernate solo lee las tablas existentes, no altera el
  esquema compartido con la aplicación Flask.
- Los ENUM de MySQL (`dia`, `tipo`) se mapean como `String` para evitar
  replicar valores.
- La búsqueda usa `JOIN FETCH` (evita N+1) y `COALESCE` sobre `descripcion`
  porque los datos sintéticos insertan `NULL`.
- Nota mostrada: promedio a 1 decimal, `"-"` si no hay evaluaciones.
  Se recalcula tras cada inserción.
- Debounce de 250 ms en el input para no enviar una petición por cada tecla.
- Enlaces cruzados: el index de Flask agrega un botón al buscador (`:8081`),
  y `buscar.html` incluye "Regresar a la página principal" (`:5000`). Las
  URLs se computan con `window.location.hostname` para conservar el host
  (solo cambia el puerto), de modo que funcionan tanto en `localhost` como
  en host remoto.

El proyecto de springboot corre en el puerto 8081 por que el puerto 8080 hacía conflicto con un servicio que tenía en el entorno en que hice la tarea.