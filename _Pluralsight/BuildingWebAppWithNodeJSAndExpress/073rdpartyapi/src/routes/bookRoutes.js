const express = require('express');
const books = require('../../data/books');

const bookRouter = express.Router();

const router = function (nav) {
    let bookService = require('../services/goodreadsService')();
    let bookController = require('../controllers/bookController')(bookService, nav);
    bookRouter.use(bookController.middleware);
    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);
    return bookRouter;
};

module.exports = router;