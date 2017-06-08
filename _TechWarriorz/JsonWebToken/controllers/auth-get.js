const express = require('express');

const secureGetRoute = express.Router();

secureGetRoute.get('/', (req, res) => res.render('home'));

secureGetRoute.get('/abc', (req, res) => res.send('Bai 1 abc'));

module.exports = secureGetRoute;
