

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require("request");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

var url = 'http://localhost:3333/books';
function getRoutes(callback){
    request('http://localhost:3333/books', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            result = JSON.stringify(JSON.parse(body));          
            return callback(result, false);
        } else {            
            return callback(null, true);;
        }
    });
}

// declare view engine template
app.set("view engine", "ejs");
// declare views (.ejs)
app.set("views", "./views");

app.get('/', function(req, res){
    getRoutes(function(response, err){ 
        if(err) return res.send("errors: "+err);       
        res.render('index',{ 'myData' : JSON.parse(response)});
    });
});

app.listen(4444);