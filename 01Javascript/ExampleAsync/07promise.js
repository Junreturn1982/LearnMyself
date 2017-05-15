const fs = require('fs');
let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('Tham so phai la kieu number'));
            }
            resolve(a + b);
        }, 1000);
    });
}
let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('Tham so phai la kieu number'));
            }
            resolve(a * b);
        }, 0);
    });
}
// add(2, 3)
// .then(result => console.log(result), err => console.log(err+""));
// goi add lay ket qua truyen qua -> goi multiply
add(2, 3)
.then(result => multiply(result, 2), 
(err) => console.log(err + ''))
.then(result => console.log(result),
err => console.log(err + ''))

// bo bat loi trong tung promise, neu co loi catch lỗi đầu tiên
add(2, 'abc')
.then(result => multiply(result, 2))
.then(result => console.log(result))
.catch(err => console.log(err + ''))