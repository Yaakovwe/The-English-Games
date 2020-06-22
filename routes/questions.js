var express = require('express');
var router = express.Router();

const database = require(database);
router.post('/add', function(req, res, next) {
    let question = new Question(req.question, req.answers);
    const result = database.insert(question);
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