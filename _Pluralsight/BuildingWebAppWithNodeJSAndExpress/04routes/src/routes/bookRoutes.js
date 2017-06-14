const express = require('express');
const books = require('../../data/books');

const bookRouter = express.Router();

bookRouter.route('/')
    .get((req, res) => {
        res.render('bookListView', { title: 'Books', nav: [
            {link: '/Books', text: 'Books'},
            {link: '/Authors', text: 'Authors'}
        ], books
     });
    });

bookRouter.route('/:id')
    .get((req, res) => {
        let { id } = req.params;
        res.render('bookView', { title: 'Books', nav: [
                {link: '/Books', text: 'Books'},
                {link: '/Authors', text: 'Authors'}
            ], book: books[id]
        });
    });

module.exports = bookRouter;