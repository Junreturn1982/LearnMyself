const express = require('express');
const books = require('../../data/books');
const mongodb = require('mongodb').MongoClient;

const adminRouter = express.Router();

const router = (val) => {
    adminRouter.route('/addBooks')
    .get((req, res) => {
        let url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, (err, db) => {
            let collection = db.collection('books');
            collection.insertMany(books, (err, results) => {
                res.send(results);
                db.close();
            });
        });
        // res.send('Inserting books');
        // res.render('bookListView', { title: 'Books', nav: val, books });
    });
    return adminRouter;
};

module.exports = router;