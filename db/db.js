const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect( (err) =>{
    if(err) {
        console.error("Error en la conexion a la DB", err);
        return;
    }

    console.log("Conectado a la base datos");
});

module.exports = connection;

