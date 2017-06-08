const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.render('home'));

router.get('/abc', (req, res) => res.send('Bai 1 abc'));

module.exports = router;

