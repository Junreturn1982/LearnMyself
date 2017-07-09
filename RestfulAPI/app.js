var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bookController = require('./controllers/book');
var datajson = require('./models/book');
var dataproduct = require('./models/products');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

app.route('/books')
    .get(bookController.getAll)
    .post(bookController.create)
    .put()
    .delete();

app.route('/books/:id')
    .get(bookController.getOne)
    .post()
    .put(bookController.update)
    .delete(bookController.delete);

app.route('/api/products/products.json')
    .get((req, res) => {
        getProduct((data) => {
            res.setHeader('Access-Control-Allow-Origin','*') 
            res.json(data);
        })
    });
function getProduct(cb) {
    setTimeout(() => {
        return cb(dataproduct);
    }, 200);
}
app.listen(process.env.PORT || 3333,'127.0.0.1', console.log('server started...'));
