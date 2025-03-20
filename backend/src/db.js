const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    database: "fakeanalyser",
    user: "root", 
    password: "", 
})

con.connect((err => {
    if (err) throw err;
    console.log("conectado no banco");
}))


module.exports = con;