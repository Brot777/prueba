import mysql from 'mysql';
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'sa',
    password : 'sa2023',
    database : 'crudprueba'
});
connection.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
});
export default connection;