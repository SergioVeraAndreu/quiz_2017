var path = require('path');

// Cargar ORM
var Sequelize = require('sequelize');

// Para usar en local BBDD SQLite:
//    DATABASE_URL = sqlite:///
//    DATABASE_STORAGE = quiz.sqlite
// Para usar en Heroku BBDD Postgres:
//    DATABASE_URL = postgres://user:passwd@host:port/database

var url, storage;

if (!process.env.DATABASE_URL) {
    url = "postgres://wighgyalnaieey:58e80b24649353d4a3b97b490ea842f61123ee4eb0222fe541740ba1bd4069a2@ec2-176-34-113-15.eu-west-1.compute.amazonaws.com:5432/d2aha9s6qnn780";
    storage = "quiz.sqlite";
} else {
    url = process.env.DATABASE_URL;
    storage = process.env.DATABASE_STORAGE || "";
}

var sequelize = new Sequelize(url, {storage: storage});



// Importar la definicion de la tabla Quiz de quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));


exports.Quiz = Quiz; // exportar definición de tabla Quiz
