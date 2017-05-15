/*=== call, apply, bind use connect objects ===*/
/*=== call ===*/
var obj = { num: 2 };
var addToThis = function(a, b){
    return this.num + a + b;
};
// functionName.call(obj, functionarguments);
console.log(addToThis.call(obj, 1, 2));

/*=== apply (array) ===*/
var arr = [2, 2];
// functionName.apply(obj, [arg1, arg2]);
console.log(addToThis.apply(obj, arr));

/*=== bind => function bound() ===*/
var bound = addToThis.bind(obj);
// console.dir(bound)
console.log(bound(2, 3));