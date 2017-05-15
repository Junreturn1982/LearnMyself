// note callback hell
let cleanRoom = function() {
    return new Promise(function(resolve, reject){
        resolve('Cleaned the room > ');
    });
};

let removeGarbage = function(result) {
     return new Promise(function(resolve, reject) {
         resolve(result + 'remove Garbage > ');
     });
};

let winIcecream = function(result) {
    return new Promise(function(resolve, reject) {
        resolve(result + 'won Icecream');
    });
};

cleanRoom().then(function(result) {
    return removeGarbage(result);
}).then(function(result) {
    return winIcecream(result);
}).then(function(result) {
    console.log('finished '+ result);
})

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
    console.log('all finished');
});

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
    console.log('one of them is finished');
});