var express = require('express');
var router = express.Router();

var wordnik = require('wordnik');

var dotenv = require('dotenv');
dotenv.load();

/* GET random_word listing. */
router.get('/', function(req, res) {

    var secret_key = process.env.WORDNIK_KEY;

    var wn = new wordnik({
        api_key: secret_key
    });

    var random_word = 'default';
    var func = function(e, word) { console.log(word); console.log(e); };

    wn.randomWord(func);

    res.json({random_word: random_word});
});

module.exports = router;
