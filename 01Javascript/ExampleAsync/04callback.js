let square = (a, b, h) => (a+b)*h / 2;

console.log('Dien tich '+ square(2, 3, 2));

let add = (a, b, callback) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number'){
            return callback(new Error('tham so phai co kieu number'));
        }
        callback(undefined, (a + b));
    }, 1000);
};
// err + '' = err.toString() -> neu ko se co loi
add(4, '5', (err, result) => {
    if(err) return console.log(err);
    console.log(result);
});