/*=== config express ===*/
var express = require("express");
var app = express();
app.listen(3000, "127.0.0.1");

/*=== Route in node js ===*/
// http://localhost:3000/hello
app.get("/hello", function(req, res){
	res.send("GET Hello");
});

app.post("/hello", function(req, res){
	res.send("POST Hello");
});

// Declare use: get param POST method
var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
/*=== params GET/POST ===*/
app.get("/tintuc/:id",function(req, res){
	var id =  req.params.id;
	res.send("Server nhan duoc id = "+id);
});
// username, password
app.post("/login", urlencodedParser,function(req, res){
	var user =  req.body.username;
	var pass = req.body.password;
	res.send("Username: "+user+" Password: "+pass);
});

/*=== config ejs ===*/
// declare view engine template
app.set("view engine", "ejs");
// declare views (.ejs)
app.set("views", "./views");
// use views file .ejs
app.get("/ejs",function(req,res){
	res.render("index");
});

/*=== lap trinh trong ejs engine ===*/
// param object json
app.get("/ejs/examjson", function(req,res){
	res.render("examjson", {"hoten" : "Nguyen Hoang", "namsinh" : 1982});
});
// param array
app.get("/ejs/examjsonArr", function(req,res){
	res.render("examjsonArr", {"namsinh" : [1982,1981,1980], "person":[{"ho":"Nguyen", "ten":"Lan"},{"ho":"Pham", "ten":"Bang"}]});
});
/*=== upload file ejs engine by multer ===*/

