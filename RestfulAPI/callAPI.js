/*=== Retrieving JSON data from web services ===*/
// npm install request // request module
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require("request");

// var q = require('q');

var url = 'http://localhost:3333/books';

// declare view engine template
app.set("view engine", "ejs");
// declare views (.ejs)
app.set("views", "./views");

app.get('/', function(req, res){
    request.get(url, function (err, response, body) {
    if (!err) {
            res.render("index", { 'myData' : JSON.parse(body)});
        }
    })
});

app.listen(4444);