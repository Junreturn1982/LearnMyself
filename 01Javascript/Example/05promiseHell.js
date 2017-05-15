function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('secret'), 100);
    });
}

function process(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${value}-code`), 100);
    });
    
}

function main() {
    let pending = get().then(process);
    console.log(pending);
    get()
        .then(process)
        .then(result => console.log(result));        
}

main();
const arr = []
let cleanRoom = function(val) {
    return new Promise(function(resolve, reject){
        console.log('Cleaned the room > ' + val);
        resolve('Cleaned the room > ' + val);
    });
};
for (var i = 1; i < 4; i++) {
    arr.push(cleanRoom(i));
}
Promise.all(arr).then(function() {
    console.log('all finished');
});