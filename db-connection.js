// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');
// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Coppo",
    database : 'eshop'
});

// Funcion que nos permite comprobar la conexión a la base de datos.
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// Funcion que nos devolverá resultados de la base de datos.
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;