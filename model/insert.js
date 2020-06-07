const mysql = require('mysql');

function con() {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "english123",
        database: "english"
    });
    return connection; //:TODO prevent calling twice
};
const connectDB = con();
connectDB.connect(function(err) {
    err ? console.log(err) : console.log("Connected!");
    const sql = "INSERT INTO categories (Name, Description) VALUES ('test', 'test')";
    connectDB.query(sql, function(err, result) {
        err ? console.log(err) : console.log("1 record inserted");
    });
});