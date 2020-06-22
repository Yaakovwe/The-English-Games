const mysql = require('mysql');

let request;

if (typeof request.question !== 'undefined' && request.answer !== 'undefined') {
    let question = request.question;
    let answer = request.question
}


if (typeof connectDB === 'undefined') { //make sure the db connection is made
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'english123',
        database: 'english'
    });
    return connection; //TODO: one DB connect for all CRUD API's


    connectDB.connect(function(err) {
        err ? console.log(err) : console.log('Connected!');

    });
}
return {
    insert: function(question) {
        const sqlQuestions = "INSERT INTO questions (Name, Description) VALUES ('test', 'test')";
        const sqlAnswers = "INSERT INTO Answers (Name, Description) VALUES ('test', 'test')";
        connectDB.query(sql, function(err, result) {
            err ? console.log(err) : console.log('1 record inserted');
        });
    }
};