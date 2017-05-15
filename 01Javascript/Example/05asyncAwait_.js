// Bất cứ hàm async nào cũng sẽ trả về 1 promise
async function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ name: 'Hoang', age: 35}), 100);
    });
}

async function process(value){
    return `${value}-code`;
}
// bản chất của hàm async chính là Promise
async function main() {
    let val = [];
    for (var i = 0; i < 3 ; i++) {
        val.push(await get());
    }
    console.log(val);
    let result = await process(val);
    console.log(result);        
}

main();