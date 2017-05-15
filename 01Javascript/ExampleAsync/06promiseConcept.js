const fs = require('fs');
let aPromise = new Promise((resolve, reject) => {
    let isPromise = true;
    isPromise ? resolve('success') : reject(new Error('fail'));
});

aPromise.then((result) => console.log('Da thuc thi '+ result), 
(errMsg) => console.log(errMsg+''));

let readFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if(err) return reject(new Error(err));
            resolve(data);
        });
    });
}


readFile('./data/a.txt')
.then(result => console.log(result), err => console.log(err+''));