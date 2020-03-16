const mysql = require("mysql");
 

const mySqlConnection = mysql.createConnection({

host: "localhost",

user: "root",

password: "savi123",

database: "fapino_db"

});

 

mySqlConnection.connect(err => {

if (err) console.log(err);

console.log("Database Connected!");

});

 

module.exports = mySqlConnection;