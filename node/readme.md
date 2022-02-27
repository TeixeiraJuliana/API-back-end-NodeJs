npm init
npm install --save expreess body-parser morgan cors nodemon sequelize  
npm install --save sequelize    
npm install --save mysql2

https://www.google.com/search?q=instalar+o+mysql+no+ubuntu+mint&oq=instalar+o+mysql+no+ubuntu+mint+&aqs=chrome..69i57j33i160l3.11326j0j15&sourceid=chrome&ie=UTF-8#kpvalbx=_XtgYYtCnIePZ5OUP_duH2AI15

https://www.youtube.com/watch?v=4ktEr1rbhx8&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=18

https://elias.praciano.com/2014/11/como-criar-links-e-atalhos-no-linux/


comandos mysql 

sudo mysql -h localhost -u root -p
CREATE DATABASE user-registration character set utf8mb4 collate utf8mb4_unicode_ci;
SHOW DATABASES
USE userRegistration
CREATE TABLE user(codigo INT, nome varchar(150), imagem longblob)
SHOW TABLES; 
DESCRIBE tabela; 

https://www.youtube.com/watch?v=_OeuPAb9bhU

https://www.youtube.com/watch?v=0BnGTVUo-Aw

INSERT INTO registered_users (nome) VALUES ("Juliana teixeira")

alter table "user_registration" drop column if exists "createdAt";
alter table "user_registration" drop column if exists "updatedAt";