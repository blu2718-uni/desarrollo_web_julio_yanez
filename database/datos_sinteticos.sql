-- Datos sinteticos para pruebas de la Tarea 2
-- Inserta 30 miembros con sus actividades y una foto placeholder cada uno
-- Ejecutar despues de tarea2.sql y region-comuna.sql

USE tarea2;

-- Miembro 1
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('María José González', 'mjgonzalez@ug.uchile.cl', '+56910000001', 'pregrado', '2024-01-15 10:00:00', 10101);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '14:30', '3', 'deporte', 'Campeonato de Fútbol Sala', NULL, 'https://deportes.uchile.cl/futbol-sala-primavera');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 2
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Juan Carlos Rodríguez', 'jc.rodriguez@ing.uchile.cl', '+56910000002', 'academico', '2024-01-16 11:00:00', 10102);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'sábado', '10:00', '4', 'tecnología', 'Taller de Robótica Avanzada', NULL, 'https://ingenieria.uchile.cl/robotica-avanzada');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 3
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Ana Patricia López', 'apalopez@dcc.uchile.cl', '+56910000003', 'postgrado', '2024-01-17 12:00:00', 10201);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '16:00', '2', 'arte', 'Exposición de Arte Digital', NULL, 'https://dcc.uchile.cl/arte-digital-2024');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 4
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Pedro Antonio Soto', 'pasoto@ug.uchile.cl', '+56910000004', 'funcionario', '2024-01-18 09:00:00', 10202);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'miércoles', '09:00', '8', 'social', 'Jornada de Integración Laboral', NULL, 'https://www.uchile.cl/bienestar/integracion');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 5
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Camila Andrea Silva', 'casilva@ing.uchile.cl', '+56910000005', 'pregrado', '2024-01-19 14:00:00', 10301);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '15:00', '5', 'recreación', 'Torneo de Ajedrez Interfacultades', NULL, 'https://centroestudiantes.ing.uchile.cl/ajedrez');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 6
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Diego Sebastián Martínez', 'dsmartinez@dcc.uchile.cl', '+56910000006', 'postgrado', '2024-01-20 08:30:00', 10302);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '09:30', '1', 'tecnología', 'Hackathon de Inteligencia Artificial', NULL, 'https://dcc.uchile.cl/hackathon-ia');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 7
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Francisca Valentina Muñoz', 'fvmunoz@ug.uchile.cl', '+56910000007', 'pregrado', '2024-01-21 10:00:00', 10303);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'miércoles', '10:00', '3', 'arte', 'Taller de Fotografía Artística', NULL, 'https://artes.uchile.cl/taller-fotografia');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 8
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Nicolás Cristóbal Rojas', 'ncrojas@ing.uchile.cl', '+56910000008', 'academico', '2024-01-22 16:30:00', 10304);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'martes', '16:30', '2', 'deporte', 'Clínica de Rugby Universitario', NULL, 'https://deportes.uchile.cl/rugby-clinica');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 9
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Daniela Constanza Díaz', 'dcdiaz@dcc.uchile.cl', '+56910000009', 'funcionario', '2024-01-23 08:00:00', 10305);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '08:00', '6', 'social', 'Voluntariado Comunitario', NULL, 'https://www.uchile.cl/extension/voluntariado');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 10
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Lucas Joaquín Pérez', 'ljperez@ug.uchile.cl', '+56910000010', 'pregrado', '2024-01-24 13:00:00', 10306);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'sábado', '13:00', '4', 'tecnología', 'Maratón de Programación', NULL, 'https://beauchef.uchile.cl/maraton-programacion');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 11
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Santiago Benjamín Contreras', 'sbcontreras@ing.uchile.cl', '+56910000011', 'postgrado', '2024-01-25 19:00:00', 10307);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'martes', '19:00', '4', 'arte', 'Festival de Música Indie', NULL, 'https://cultural.uchile.cl/festival-indie');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 12
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Martina Alejandra Castillo', 'macastillo@dcc.uchile.cl', '+56910000012', 'pregrado', '2024-01-26 17:30:00', 20101);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '17:30', '3', 'recreación', 'Encuentro de Juegos de Mesa', NULL, 'https://dcc.uchile.cl/juegos-mesa');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 13
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Mateo Maximiliano Sepúlveda', 'msepulveda@ug.uchile.cl', '+56910000013', 'academico', '2024-01-27 11:00:00', 20102);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'jueves', '11:00', '2', 'deporte', 'Natación Adaptada Inclusiva', NULL, 'https://deportes.uchile.cl/natacion-adaptada');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 14
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Florencia Antonia Ramírez', 'framirez@ing.uchile.cl', '+56910000014', 'funcionario', '2024-01-28 15:00:00', 20201);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'martes', '15:00', '3', 'social', 'Taller de Oratoria y Debate', NULL, 'https://www.uchile.cl/formacion/oratoria');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 15
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Gaspar Tomás Morales', 'gtmorales@dcc.uchile.cl', '+56910000015', 'postgrado', '2024-01-29 09:00:00', 20202);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '09:00', '5', 'tecnología', 'Conferencia de Realidad Virtual', NULL, 'https://dcc.uchile.cl/vr-conferencia');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 16
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Victoria Emma Torres', 'vetorres@ug.uchile.cl', '+56910000016', 'pregrado', '2024-01-30 18:30:00', 20203);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'domingo', '18:30', '2', 'arte', 'Exhibición de Danza Contemporánea', NULL, 'https://artes.uchile.cl/danza-contemporanea');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 17
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Emilio Agustín Vargas', 'eavargas@ing.uchile.cl', '+56910000017', 'pregrado', '2024-01-31 14:00:00', 20301);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'jueves', '14:00', '4', 'deporte', 'Torneo de Vóleibol Mixto', NULL, 'https://deportes.uchile.cl/voleibol-mixto');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 18
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Alonso Emilio Fuentes', 'aefuentes@dcc.uchile.cl', '+56910000018', 'academico', '2024-02-01 20:00:00', 20302);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'jueves', '20:00', '3', 'recreación', 'Cine al Aire Libre: Clásicos', NULL, 'https://cultural.uchile.cl/cine-libre');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 19
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Patricia Alejandra Valenzuela', 'pavalenzuela@ug.uchile.cl', '+56910000019', 'funcionario', '2024-02-02 10:30:00', 20303);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'martes', '10:30', '6', 'arte', 'Taller de Escultura en Piedra', NULL, 'https://artes.uchile.cl/escultura-piedra');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 20
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Catalina Belén Araya', 'cbaraya@ing.uchile.cl', '+56910000020', 'postgrado', '2024-02-03 11:30:00', 20304);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'jueves', '11:30', '4', 'tecnología', 'Seminario de Blockchain y Cripto', NULL, 'https://ingenieria.uchile.cl/blockchain-seminario');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 21
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Benjamín Nicolás Carrasco', 'bncarrasco@dcc.uchile.cl', '+56910000021', 'pregrado', '2024-02-04 09:00:00', 30101);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'sábado', '09:00', '4', 'social', 'Capacitación en Primeros Auxilios', NULL, 'https://www.uchile.cl/seguridad/primeros-auxilios');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 22
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Javiera Ignacia Cortés', 'jicortes@ug.uchile.cl', '+56910000022', 'pregrado', '2024-02-05 15:30:00', 30102);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '15:30', '6', 'deporte', 'Competencia de E-Sports: Valorant', NULL, 'https://deportes.uchile.cl/esports-valorant');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 23
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Cristóbal Andrés Herrera', 'caherrera@ing.uchile.cl', '+56910000023', 'postgrado', '2024-02-06 16:00:00', 30201);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'jueves', '16:00', '2', 'arte', 'Taller de Origami Avanzado', NULL, 'https://cultural.uchile.cl/origami');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 24
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Antonia Sofía Medina', 'asmedina@dcc.uchile.cl', '+56910000024', 'funcionario', '2024-02-07 18:00:00', 30202);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'miércoles', '18:00', '3', 'otra', 'Networking para Innovación', NULL, 'https://innovacion.uchile.cl/networking');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 25
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Maximiliano José Miranda', 'mjmiranda@ug.uchile.cl', '+56910000025', 'academico', '2024-02-08 10:00:00', 30203);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'miércoles', '10:00', '2', 'tecnología', 'Clase Magistral de IoT Industrial', NULL, 'https://beauchef.uchile.cl/iot-magistral');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 26
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Agustín Diego Figueroa', 'adfigueroa@ing.uchile.cl', '+56910000026', 'pregrado', '2024-02-09 17:00:00', 30301);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '17:00', '2', 'recreación', 'Escape Room Matemático', NULL, 'https://centroestudiantes.ing.uchile.cl/escape-room');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 27
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Gaspar Alonso Jara', 'gajara@dcc.uchile.cl', '+56910000027', 'postgrado', '2024-02-10 08:30:00', 30302);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'domingo', '08:30', '2', 'deporte', 'Atletismo: Carrera 5K Campus', NULL, 'https://deportes.uchile.cl/carrera-5k');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 28
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Tomás Sebastián Sandoval', 'tssandoval@ug.uchile.cl', '+56910000028', 'funcionario', '2024-02-11 16:00:00', 30303);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'jueves', '16:00', '2', 'social', 'Ceremonia de Reconocimiento', NULL, 'https://www.uchile.cl/direccion/reconocimiento');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 29
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Valentina Constanza Vega', 'vcvega@ing.uchile.cl', '+56910000029', 'pregrado', '2024-02-12 14:30:00', 30304);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'lunes', '14:30', '3', 'otra', 'Taller de Podcast y Radio', NULL, 'https://comunicaciones.uchile.cl/taller-podcast');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);

-- Miembro 30
INSERT INTO miembro (nombre, email, telefono, rol, fecha_registro, comuna_id)
VALUES ('Joaquín Lucas Tapia', 'jltapia@dcc.uchile.cl', '+56910000030', 'academico', '2024-02-13 11:00:00', 40101);
SET @miembro_id = LAST_INSERT_ID();
INSERT INTO actividad (miembro_id, dia, hora_inicio, duracion, tipo, nombre, descripcion, link)
VALUES (@miembro_id, 'viernes', '11:00', '4', 'recreación', 'Paintball Estratégico', NULL, 'https://deportes.uchile.cl/paintball');
SET @actividad_id = LAST_INSERT_ID();
INSERT INTO foto (ruta_archivo, nombre_archivo, actividad_id)
VALUES ('static/img/placeholder.jpg', 'placeholder.jpg', @actividad_id);
