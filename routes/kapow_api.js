var express = require('express');
var router = express.Router();

var dotenv = require('dotenv');
dotenv.load();

var http = require("http");

/* GET upcoming listings */
router.get('/*', function (req, res) {

    url = req.url.replace(/\//g, '');

    console.log(url);

    full_url = 'http://kapow-api.herokuapp.com/releases/' + url + '.json';
    console.log(full_url);

    http.get(full_url, function (http_res) {
        // initialize the container for our data
        var data = "";

        // this event fires many times, each time collecting another piece of the response
        http_res.on("data", function (chunk) {
            // append this chunk to our growing `data` var
            data += chunk;
        });

        // this event fires *one* time, after all the `data` events/chunks have been gathered
        http_res.on("end", function () {

            var statusCode = http_res.statusCode;
            console.log("Status code: " + statusCode + " for: " + full_url);

            if (statusCode == 200) {
                res.json(data);
            } else {
                console.error("problem with request for: " + full_url);
                res.statusCode = 500;
                res.json({error: "Connection failure: " + statusCode});
            }
        });
    });
});

module.exports = router;
