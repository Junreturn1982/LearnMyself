let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('tham so phai co kieu number'));
            }
            resolve(a + b);
        }, 500);
    });
};

const aPromise = Promise.resolve(add(4, 5));
aPromise.then(result => console.log(result));
console.log(aPromise);

const errPromise = Promise.reject(new Error('fail'));
errPromise.catch(err => console.log(err + ''));
console.log(errPromise);
