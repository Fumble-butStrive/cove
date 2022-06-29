//.....Requirements.....//
const mysql = require("mysql");
const dotenv = require("dotenv");

///.....Initialize Dotenv.....//
dotenv.config();

//.....MySQL Login.....//
let database = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dolphin_cove'
});

//.....MySQL Connect.....//
database.connect((err) => {
    if (err) throw err;
    else console.log("Successful connection to Database.");
})

//.....Export Connection Object.....//
module.exports = database;