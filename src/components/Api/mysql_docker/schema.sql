-- Create the database
CREATE DATABASE IF NOT EXISTS carros_db;
USE carros_db;

-- Create a user and grant privileges
CREATE USER IF NOT EXISTS 'blog_user'@'%' IDENTIFIED BY 'blog_password';
GRANT ALL PRIVILEGES ON carros_db.* TO 'blog_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS carblogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    imagen TEXT,
    nombre_carro varchar(300) NOT NULL,
    modelo_carro varchar(300) NOT NULL


);


INSERT INTO carblogs(title, content, imagen, nombre_carro, modelo_carro)
values( 'Conoce El BMW M5 CS', '625 de caballos de fuerza no hay problema con la calles de Canada', 
''
   )