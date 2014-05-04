var express = require('express');
var router = express.Router();

/* GET random_word listing. */
router.get('/', function(req, res) {
    random_word = 'perspicacious';
    res.json({random_word: random_word});
});

module.exports = router;
