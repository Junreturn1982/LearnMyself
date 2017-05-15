/*=== loop ===*/
for (var i = 0; i < 3; i++) {
	console.log("Count "+i);
}

var line = 1;
while(line <= 5){
	console.log("Line number "+line);
	line += 1;
}

/*=== function ===*/

var x = tinhtong(3,4);
console.log("Tong "+x);

callback(hello);

var hello = function(){
	console.log("World");
}
hello();

function tinhtong(a,b){
	return a+b;
}

function hello(){
	console.log("Hello")
}

function callback(fn){
	fn();
}