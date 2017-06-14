const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const bookController = function(bookService, nav) {
    let middleware = (req, res, next) => {
        // if (!req.user) {
        //     return res.redirect('/');
        // }
        next();
    };
    let getIndex = (req, res) => {
            let url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('books');
                collection.find({}).toArray((err, results) => {
                        res.render('bookListView', { title: 'Books', nav: nav, books: results
                    });
                });
            });
        };

    let getById = (req, res) => {
            let id = new objectId(req.params.id);
            let url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('books');
                collection.findOne({_id: id}, (err, results) => {
                        if (results.bookId) {
                            bookService.getBookById(results.bookId, (err, book) => {
                                results.book = book;
                                res.render('bookView', { title: 'Books', nav: nav, 
                                book: results
                                });
                            });
                        } else {
                            res.render('bookView', { title: 'Books', nav: nav, 
                                book: results
                            });
                        }
                });
            });
        };

    return {
        getIndex,
        getById,
        middleware
    };
};

module.exports = bookController;