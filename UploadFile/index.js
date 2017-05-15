var express = require("express");
var app = express();

app.listen(3000, function(req, res){
	console.log("connect server");
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res){
	res.render("form");
});
// declare multer, use module multer
var multer  = require('multer');
// destination
var storage = multer.diskStorage({
	destination : function(req,file,cb){
		cb(null,"./upload");
	},
	filename: function(req,file,cb){
		cb(null,file.originalname)
	}
});

var upload = multer({storage:storage});

app.post('/upload', upload.single('fileUpload'), function (req, res, next) {
  console.log(req.file);
  res.send("Upload sucessfully");
});
