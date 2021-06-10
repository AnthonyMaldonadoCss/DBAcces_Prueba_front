CREATE DATABASE ng_instructores_db;

USE ng_instructores_db;

CREATE TABLE instructores(
    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (20),
    descripcion VARCHAR (50),
    imagen VARCHAR (200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

DESCRIBE instructores;