var express = require('express');
var router = express.Router();

router.post('/add', function(req, res, next) {
    res.send({ Message: '1 Question Record Added' });
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