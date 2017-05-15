let mang = [4, 3, 2, 1];
// dau => 1 lệnh bao hàm nghĩa return
let mang2 = mang.map(e => e * 2);

console.log(mang2);

let func = () => {};
console.log("func: " + func());

let err = 'loi';
err ? console.log(err) : console.log('khong loi')

!false ? console.log('true') : console.log('false');

undefined ? console.log('ket qua') : console.log('ko ket qua');
