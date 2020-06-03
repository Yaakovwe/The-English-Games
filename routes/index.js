var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    debugger;
    res.render('index', { title: 'English Games' });
});


module.exports = router;