const express = require('express');

const app = express();
const bai1Router = require('./controller/bai1.js');

app.use(express.static('./public'));
app.use('/bai1', bai1Router);

app.listen(3000, () => console.log('Start!!!'));

app.set('view engine', 'ejs');
app.set('views', './views');

