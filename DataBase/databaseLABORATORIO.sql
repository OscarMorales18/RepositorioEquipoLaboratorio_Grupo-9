CREATE DATABASE IF NOT EXISTS InventariosLaboratorio
CHARACTER SET utf8mb4;

USE InventariosLaboratorio;

CREATE TABLE Empleados(
    id_empleado INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_empleado VARCHAR(25) NOT NULL,
    apellido_empleado VARCHAR(25) NOT NULL,
    telefono_empleado INT(10) NOT NULL,
    correo_empleado VARCHAR(50) NOT NULL,
    estado_empleado TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE Usuarios(
    id_usuario INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(25) NOT NULL,
    id_empleado INT NOT NULL,
    perfil_usuario VARCHAR(25) NOT NULL,
    descripcion_perfil VARCHAR(50) NOT NULL,
    estado_usuario TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE Cliente(
    id_cliente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(25) NOT NULL,
    apellido_cliente VARCHAR(25) NOT NULL,
    dpi_cliente VARCHAR(13) NOT NULL,
    nit_cliente VARCHAR(9),
    telefono_cliente INT(10) NOT NULL,
    correo_cliente VARCHAR(50) NOT NULL,
    no_renta_cliente INT NOT NULL,
    estado_cliente TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE Inventario(
    id_elemento INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_elemento VARCHAR(25) NOT NULL,
    material_elemento VARCHAR(25) NOT NULL,
    marca_elemento VARCHAR(25) NOT NULL,
    carrera_orientada VARCHAR(25) NOT NULL,
    descripcion_elemento VARCHAR(50) NOT NULL,
    precio_renta DECIMAL(10,2) NOT NULL,
    cantidad_stock INT NOT NULL,
    estado_elemento TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE Rentas(
    id_renta INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_elemento INT NOT NULL,
    fecha_renta DATE NOT NULL,
    fecha_devolucion DATE NOT NULL,
    estado_renta TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE Bitacora(
   id_bitacora INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   id_usuario INT NOT NULL,
   accion_realizada VARCHAR(25) NOT NULL,
   tabla_afectada VARCHAR(25) NOT NULL,
   id_campo INT NOT NULL, 
   detalle_accion VARCHAR,
   fecha_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Facturacion(
    
);

CREATE TABLE Devolucion(
    
);

CREATE TABLE Mora(

);