async function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('secret'), 100);
    });
}

async function process(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${value}-code`), 100);
    });
    
}
// bản chất của hàm async chính là Promise
async function main() {
    let val = await get();
    console.log(val);
    let result = await process(val);
    console.log(result);        
}

main();