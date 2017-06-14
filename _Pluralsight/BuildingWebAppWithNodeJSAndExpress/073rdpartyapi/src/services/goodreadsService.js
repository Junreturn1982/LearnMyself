const http = require('http');
const xml2js = require('xml2js');
const parser = xml2js.Parser({explicitArray: false});

const goodreadsService = function () {

    let getBookById = (id, cb) => {
        let options = {
            host: 'www.goodreads.com',
            path: '/book/show/'+id+'.xml?key=ucd8Ov2Te2rCOBhTabFhw'
        };
        let callback = (response) => {
            let str = '';

            response.on('data', (chunk) => {
                str += chunk;
            });
            response.on('end', () => {
                console.log(str);
                parser.parseString(str, (err, result) => {
                    cb(null, result.GoodreadsResponse.book);
                });
            });            
        };
        http.request(options, callback).end();
    };

    return {
        getBookById
    };

};

module.exports = goodreadsService;