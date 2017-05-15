let fs = require('fs');

fs.readFile('./data/a.txt', 'utf8', (err, data) => {
    if(err) return console.log(err);
    console.log(data);
});

console.log('ket thuc');