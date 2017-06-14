const express = require('express');
const books = require('../../data/books');
const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const bookRouter = express.Router();

bookRouter.use((req, res, next) => {
    if (!req.user) {
        return res.redirect('/');
    }
    next();
});
bookRouter.route('/')
    .get((req, res) => {
        let url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, (err, db) => {
            let collection = db.collection('books');
            collection.find({}).toArray((err, results) => {
                    res.render('bookListView', { title: 'Books', nav: [
                        {link: '/Books', text: 'Books'},
                        {link: '/Authors', text: 'Authors'}
                    ], books: results
                });
            });
        });
    });

bookRouter.route('/:id')
    .get((req, res) => {
        let id = new objectId(req.params.id);
        let url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, (err, db) => {
            let collection = db.collection('books');
            collection.findOne({_id: id}, (err, results) => {
                    res.render('bookView', { title: 'Books', nav: [
                        {link: '/Books', text: 'Books'},
                        {link: '/Authors', text: 'Authors'}
                    ], book: results
                });
            });
        });
    });

module.exports = bookRouter;