var express = require('express');
var router = express.Router();

const database = require('../model/database.js');
router.post('/add', function(req, res, next) {
    const query = req.query;
    let question = { questionName: query.questionName, question: query.question, answers: query.answers };
    const connect = database.connect();
    const result = database.insert(connect, question); //test
    if (typeof question.question == 'undefined' || typeof question.answers == 'undefined') {
        res.send({ Message: "GFY" });
    } else {
        res.send({ Message: query.questionName + ' ' + query.question + ' ' + query.answers });
    }
});

router.put('/update', function(req, res, next) {
    const query = req.query;
    let question = { question: query.question, answers: query.answers };
    const connect = database.connect();
    const result = database.insert(connect, question); //test
    if (question.question == null || question.answers == null) {
        res.send({ Message: "GFY" });
    } else {
        res.send({ Message: query.question + ' ' + query.answers });
    }

});

router.delete('/delete', function(req, res, next) {
    const query = req.query;
    let question = { question: query.question, answers: query.answers };
    const connect = database.connect();
    const result = database.insert(connect, question); //test
    res.send({ Message: result });
});

router.get('/read', function(req, res, next) {
    const query = req.query;
    let question = { question: query.question, answers: query.answers };
    const connect = database.connect();
    const result = database.insert(connect, question); //test
    res.send({ Message: result });
});
module.exports = router;