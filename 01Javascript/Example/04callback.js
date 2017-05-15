let add = function(a, b) {
    return a+b;
}

function multiply(a, b) {
 return a*b;
}

let calc = function(num1, num2, callback) {
    if(typeof callback === 'function')
        return callback(num1, num2);
}

let doWhatever = function(a, b) {
    console.log(`Numbers back ${a}, ${b}`);
};

console.log(calc(2, 3, add));
console.log(calc(2, 3, multiply));
console.log(calc(2, 3, doWhatever));
