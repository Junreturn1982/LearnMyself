function get(callback) {
    return setTimeout(() => callback('secret'), 500);
}

function process(value, callback){
    return setTimeout(() => callback(`${value}-code`), 100);
}

function main() {
    // get(value => process(value, result => console.log(result)));
    get(value => {
        // console.log(value);
        process(value, result => console.log(result));
    });
}

main();