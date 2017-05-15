var express = require("express");
var app = express();
var server = require("http").createServer(app); 
server.listen(3000,"127.0.0.1");

app.get("/", function(req, res){
	res.send("<font color=red>HELLO WORLD</font>");
});