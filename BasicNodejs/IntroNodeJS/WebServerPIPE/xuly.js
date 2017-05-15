var http = require("http");
// file server
var fs = require("fs");

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/html"});
	var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
	myReadStream.pipe(res);
});

server.listen(7777,"127.0.0.1");