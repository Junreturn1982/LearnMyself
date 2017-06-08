const express = require('express');

const app = express();

app.use(express.static('./public'));
app.use('/bai1', require('./controller/bai1.js'));

app.listen(3000, () => console.log('Start!!!'));

app.set('view engine', 'ejs');
app.set('views', './views');

