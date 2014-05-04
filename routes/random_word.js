var express = require('express');
var router = express.Router();

/* GET random_word listing. */
router.get('/', function(req, res) {
    res.send('respond with a random word!!');
});

module.exports = router;
