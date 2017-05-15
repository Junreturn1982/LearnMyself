const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, '127.0.0.1', console.log('server started...'));

const request = require('request');
const cheerio = require('cheerio');

function getRequest(callback){
    request('http://vnexpress.net/', (err, res, body) => {
        if(err){
            console.log(err);
        } else {
            return callback(body);
        }
    });
}; 
app.get('/', (req, res) => {
    getRequest(body => {
        const $ = cheerio.load(body);
        let ds = $(body).find('a.txt_link');
        console.log(ds[0]['attribs']['title']);
        // ds.each((i, e) => {
        //     console.log($(this).text());
        //     console.log(e['attribs']['href']);
        // });

        res.render('trangchu', { html: ds });
    });
    
});