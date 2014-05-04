var express = require('express');
var router = express.Router();

var wordnik = require('wordnik');

/* GET random_word listing. */
router.get('/', function(req, res) {

    var wn = new wordnik({
        api_key: ''
    });

    var random_word = 'default';
    var func = function(e, word) { console.log(word); console.log(e); };

    wn.randomWord(func);

    res.json({random_word: random_word});
});

module.exports = router;
