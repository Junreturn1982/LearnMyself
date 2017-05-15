// concept promise
let promiseToCleanTheRoom = new Promise((resolve, reject) => {
    // cleaning the room

    let isClean = false;

    if(isClean){
        resolve('Clean');
    } else {
        reject('not clean');
    }
});

promiseToCleanTheRoom.then((fromResolve) => {
    console.log('the room is ' + fromResolve);
}).catch((fromReject) => {
    console.log('the roome is ' + fromReject);
});