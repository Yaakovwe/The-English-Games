var express = require('express');
var router = express.Router();

const database = require('../model/database.js');
router.post('/add', function(req, res, next) {
    const query = req.query;
    let question = { question: query.question, answers: query.answers };
    const connect = database.connect();
    const result = database.insert(connect, question);
    res.send({ Message: result });
});

router.put('/update', function(req, res, next) {
    res.send({ Message: '1 Question Record Updated' });
});

router.delete('/delete', function(req, res, next) {
    res.send({ Message: '1 Question Record Deleted' });
});

router.get('/read', function(req, res, next) {
    res.send({ Message: '1 Question Record found' });
});
module.exports = router;