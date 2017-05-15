let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('tham so phai co kieu number (cong)'));
            }
            resolve(a + b);
        }, 500);
    });
};

let multiply = (a, b) => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('tham so phai co kieu number (nhan)'));
            }
            resolve(a * b);
        }, 500);
     });
};
// tat ca promise phai resolve -> thanh cong
Promise.all([add(5, '6'), multiply(2, 3)])
.then(result => console.log(result))
.catch(err => console.log(err + ''));
// mot promise resolve -> thanh cong
Promise.race([add(5, 6), multiply(2, '3')])
.then(result => console.log(result))
.catch(err => console.log(err + ''));
