// module fs (file server)
var fs = require("fs");

var noidung = fs.readFileSync(__dirname + "/7Danhsachhocvien.txt");
// buffer
console.log(noidung);

console.log(noidung.toString())