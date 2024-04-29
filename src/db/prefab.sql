-- CREATION SCHEMA AND TABLES
use fncc;
create table task
(
    id_task     int auto_increment,
    name        varchar(100) not null,
    description longtext     not null,
    begin_date  date         not null,
    end_date    date         not null,
    duration    int          not null,
    id_priority int          not null,
    id_status   int          not null,
    constraint task_pk
        primary key (id_task)
);
create table priority
(
    id_priority int auto_increment,
    name        varchar(100) not null,
    description longtext     not null,
    constraint priority_pk
        primary key (id_priority)
);
create table status
(
    id_status   int auto_increment,
    name        varchar(100) not null,
    description longtext     null,
    constraint status_pk
        primary key (id_status)
);
create table sub_task
(
    id_sub_task   int auto_increment,
    id_mayor_task int not null,
    id_minor_task int not null,
    constraint sub_task_pk
        primary key (id_sub_task)
);

-- INSERT DEFAULT VALUES
INSERT INTO fncc.priority (name, description)
VALUES (
    'Urgente',
    'Las tareas urgentes son aquellas que requieren atención inmediata e inaplazable. Suelen estar asociadas a un problema crítico que debe solucionarse lo antes posible para evitar consecuencias negativas o cumplir con un plazo límite inminente.'
);
INSERT INTO fncc.priority (name, description)
VALUES (
    'Normal',
    'Las tareas normales son aquellas que son importantes y deben completarse en un tiempo determinado, pero no son tan críticas como las urgentes. Implican actividades que contribuyen al logro de objetivos a mediano plazo y requieren atención regular.'
);
INSERT INTO fncc.priority (name, description)
VALUES (
    'Bajo',
    'Las tareas de baja prioridad son aquellas que son menos importantes y no tienen un impacto significativo en el proyecto o trabajo. Pueden posponerse sin afectar el resultado general y, a menudo, se realizan cuando se dispone de tiempo libre.'
);

INSERT INTO fncc.status (name, description)
VALUES (
    'Iniciada',
    'Una tarea iniciada significa que se ha dado el primer paso para completarla. Se ha asignado a un responsable, se han definido los objetivos y se ha comenzado a trabajar en ella.'
);
INSERT INTO fncc.status (name, description)
VALUES (
    'En proceso',
    'Una tarea en proceso significa que se está trabajando activamente en ella. El responsable está dedicando tiempo y esfuerzo para completarla y se están produciendo avances tangibles.'
);
INSERT INTO fncc.status (name, description)
VALUES (
    'Terminada',
    'Una tarea terminada significa que se ha completado en su totalidad. Se han cumplido todos los objetivos, se han entregado los resultados esperados y no queda ningún trabajo pendiente.'
);

INSERT INTO fncc.task (name, description, begin_date, end_date, duration, id_priority, id_status)
VALUES (
    'Task #1', 'T#1 - Lorem ipsum dolor sit amet', '2024-04-29', '2024-04-30', 60, 1, 3
);
INSERT INTO fncc.task (name, description, begin_date, end_date, duration, id_priority, id_status)
VALUES (
    'Task #2', 'T#2 - Lorem ipsum dolor sit amet', '2024-04-30', '2024-05-01', 120, 2, 2
);
INSERT INTO fncc.task (name, description, begin_date, end_date, duration, id_priority, id_status)
VALUES (
    'Task #3', 'T#3 - Lorem ipsum dolor sit amet', '2024-05-01', '2024-05-02', 180, 3, 1
);
INSERT INTO fncc.task (name, description, begin_date, end_date, duration, id_priority, id_status)
VALUES (
    'Task #4', 'T#4 - Lorem ipsum dolor sit amet', '2024-05-02', '2024-05-03', 240, 2, 2
);
INSERT INTO fncc.task (name, description, begin_date, end_date, duration, id_priority, id_status)
VALUES (
    'Task #5', 'T#5 - Lorem ipsum dolor sit amet', '2024-05-03', '2024-05-04', 300, 1, 3
);
INSERT INTO fncc.task (name, description, begin_date, end_date, duration, id_priority, id_status)
VALUES (
    'Task #6', 'T#6 - Lorem ipsum dolor sit amet', '2024-05-04', '2024-05-05', 360, 2, 2
);
INSERT INTO fncc.task (name, description, begin_date, end_date, duration, id_priority, id_status)
VALUES (
    'Task #7', 'T#7 - Lorem ipsum dolor sit amet', '2024-05-05', '2024-05-06', 720, 3, 1
);
INSERT INTO fncc.task (name, description, begin_date, end_date, duration, id_priority, id_status)
VALUES (
    'Task #8', 'T#8 - Lorem ipsum dolor sit amet', '2024-05-06', '2024-05-07', 780, 2, 2
);

INSERT INTO fncc.sub_task (id_mayor_task, id_minor_task)
VALUES (
    1, 6
);
INSERT INTO fncc.sub_task (id_mayor_task, id_minor_task)
VALUES (
    2, 7
);
INSERT INTO fncc.sub_task (id_mayor_task, id_minor_task)
VALUES (
    6, 8
);