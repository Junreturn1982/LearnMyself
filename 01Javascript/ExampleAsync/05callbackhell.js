let square = (a, b, h) => (a+b)*h / 2;

let add = (a, b, callback) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number'){
            return callback(new Error('tham so phai co kieu number'));
        }
        callback(undefined, (a + b));
    }, 1000);
};

let multiply = (a, b, callback) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number'){
            return callback(new Error('tham so phai co kieu number'));
        }
        callback(undefined, (a * b));
    }, 1000);
};
let divide = (a, b, callback) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number'){
            return callback(new Error('tham so phai co kieu number'));
        }
        if(b == 0) return cb(new Error('Chia cho 0'));
        callback(undefined, (a / b));
    }, 1000);
};
// callback heaven
let tinhDienTichHinhThang = (a, b, h, cb) => {
    add(a, b, (err, result) => {
        if(err) return cb(err);
        multiply(result, h, (err, resultMulti) => {
            if(err) return cb(err);
            divide(resultMulti, 2, (err, resultDiv) => {
                if(err) return cb(err);
                cb(undefined, resultDiv);
            });
        });
    });
}

tinhDienTichHinhThang(2, 3, 2, (err, result) => {
    if(err) return console.log(err.toString());
    console.log('Dien tich: ', result);
});
