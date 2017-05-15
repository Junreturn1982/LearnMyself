let square = (a, b, h) => (a+b)*h / 2;

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

let multiply = (a, b) => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('tham so phai co kieu number'));
            }
            resolve(a * b);
        }, 500);
     });
};

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('tham so phai co kieu number'));
            }
            if(b == 0) return cb(new Error('Chia cho 0'));
            resolve(a / b);
        }, 500);
     });
};

let tinhDienTich = (a, b, h) => {
    return add(a, b)
    .then(res => multiply(res, h))
    .then(result => divide(result, 2))
    .catch(err => console.log(err + ''))
}
// .then after get result then previous 
tinhDienTich(4, 6, 5)
.then(result => console.log('Dien tich hình thang: ' + result))
.catch(err => console.log(err + ''))

