CREATE DATABASE tiendaperu;
USE tiendaperu;

CREATE TABLE IF NOT EXISTS productos
(
	id 				INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca   		VARCHAR(100) 	NOT NULL,
    descripcion 	VARCHAR(200) 	NOT NULL,
    precio			DECIMAL(10,2) 	NOT NULL,
    stock			INT UNSIGNED	NOT NULL DEFAULT 0,
    create_at		DATETIME		NOT NULL DEFAULT NOW(), 
    update_at		DATETIME        NULL
)ENGINE = INNODB;

INSERT INTO productos
(marca, descripcion, precio, stock)
VALUES
('Samsung', 'TV 55', 2500, 10),
('LG', 'Lavadora', 1200, 3),
('Sony', 'Playstation 5', 3200, 2 );

SELECT * FROM productos;

CREATE TABLE IF NOT EXISTS clientes
(
id				INT UNSIGNED    NOT NULL AUTO_INCREMENT PRIMARY KEY,
apellidos		VARCHAR(100)    NOT NULL,
nombres			VARCHAR(100)    NOT NULL,
telefono		char(9)         NOT NULL,
direccion		VARCHAR(200)    NOT NULL,
email			VARCHAR(150)    NOT NULL,
create_at	    DATETIME        NOT NULL DEFAULT NOW(),
update_at	    DATETIME        NULL
)ENGINE = INNODB;

INSERT INTO clientes 
(apellidos, nombres, telefono, direccion, email) 
VALUES 
('Pachas Yataco', 'Carlos Eduardo', '956342189', 'Av. Mariscal Benavides 450, Chincha Alta', 'pachasyce@gmail.com'),
('Tasayco Saravia', 'Luis Alberto', '923487612', 'Calle Grau 215, Sunampe', 'tasaycosla@gmail.com'),
('Quispe Huaman', 'Jose Miguel', '974512098', 'Jr. Lima 108, Pueblo Nuevo', 'quispehm@gmail.com');

SELECT * FROM clientes;

CREATE TABLE IF NOT EXISTS proveedores
(
id				INT UNSIGNED    NOT NULL AUTO_INCREMENT PRIMARY KEY,
razonsocial		VARCHAR(200)    NOT NULL,
contacto		VARCHAR(100)    NOT NULL,
ruc				CHAR(11)        NOT NULL,
direccion		VARCHAR(200)    NOT NULL,
create_at	    DATETIME		NOT NULL DEFAULT NOW(),
update_at	    DATETIME		NULL
)ENGINE = INNODB;

INSERT INTO proveedores 
(razonsocial, contacto, ruc, direccion) 
VALUES 
('Importaciones y Servicios del Sur S.A.C.', 'Miguel Angel Torres', '20523456789', 'Av. San Martin 230, Chincha Alta'),
('Constructora e Inmobiliaria El Pacifico S.A.', 'Rosa Elena Gutierrez', '20412345678', 'Calle Real 512, Ica'),
('Distribuidora Comercial de Alimentos E.I.R.L.', 'Carlos Alberto Castro', '20609876543', 'Av. Industrial 405, Lima');

SELECT * FROM proveedores;