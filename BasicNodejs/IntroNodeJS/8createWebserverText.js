// call module
var http = require("http");
// request, response
http.createServer(function(req, res){
	// {"Content-Type":"text/html; charset=utf-8"}
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.end("Hello World");
}).listen(8888);

http.createServer(function(req, res){
	// {"Content-Type":"text/html; charset=utf-8"}
	res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	res.end("<i>Hello</i> <b> World </b>");
}).listen(8889);