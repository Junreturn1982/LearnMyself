// Closure là một hàm được tạo ra từ bên trong một hàm khác (hàm cha)
// use view: https://jsfiddle.net/
/* 
var passed = 3;
var addTo = function(){
    var inner = 2;
    return passed + inner;
};

console.dir(addTo);
*/

var addTo = function(passed) {
    var add = function(inner) {
        return passed + inner;
    }
    return add;
}

var addThree = new addTo(3);

console.dir(addThree);
console.log(addThree(1));