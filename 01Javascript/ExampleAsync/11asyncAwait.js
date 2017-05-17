const dienTichHinhThang = (a, b, h) => (a+b)*h / 2;

const add = async (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('tham so phai co kieu number'));
            }
            resolve(a + b);
        }, 500);
    });
};

const multiply = async (a, b) => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('tham so phai co kieu number'));
            }
            resolve(a * b);
        }, 500);
     });
};

const divide = async (a, b) => {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('tham so phai co kieu number'));
            }
            if (b == 0) return cb(new Error('Chia cho 0'));
            resolve(a / b);
        }, 500);
     });
};

const tinhDienTich = async (a, b, h, cb) => {
    try {
        const addRs = await add(a, b);
        const multiRs = await multiply(addRs, h);
        const square = await divide(multiRs, 2);
        cb(undefined, square);
    } catch (error) {
        cb(error);
    }
};

// khai bao cac function là async va khi goi ham thì await
tinhDienTich(4, 6, 5, (err, result) => {
    if (err) return console.log(err + '');
    console.log(result);
});

