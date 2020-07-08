const mysql = require('mysql'); //TODO: Change to node.js module

const database = {
    connect: function() {
        // if (typeof connectDB === 'undefined') { //make sure the db connection is made
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'english123',
            database: 'english'
        });

        connection.connect(function(err) {
            err ? console.log(err) : console.log('Connected!');
        });

        return connection;
        // }
    },


    insert: function(connection, question) {
        if (typeof question.question === 'undefined' || typeof question.answers === 'undefined') {
            return "GFY"; //TODO: Change to throw
        }
        let questionOnly = question.question;
        let answer = question.answers;
        const sqlQuestion = "INSERT INTO questions (Name, Description) VALUES ('test', 'test')";
        const sqlAnswer = "INSERT INTO answers (Name, Description) VALUES ('test', 'test')";

        connection.query(sqlQuestion, function(err, result) {
            err ? console.log(err) : console.log('1 question inserted');
        });

        connection.query(sqlAnswer, function(err, result) { //TODO: Add support for multiple answers
            err ? console.log(err) : console.log('1 answer inserted');

        });
        connection.end();
    }

};

module.exports = database