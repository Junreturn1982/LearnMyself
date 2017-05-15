var http = require("http");
// file server
var fs = require("fs");

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"application/json; charset=utf-8"});
	var obj = {
		ho : "Nguyễn",
		ten : "Hoàng",
		namSinh : 1982
	};
	
	res.end(JSON.stringify(obj));
});

server.listen(7777,"127.0.0.1");