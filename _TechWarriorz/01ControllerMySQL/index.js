const express = require('express');
const bodyParser = require('body-parser');

// Controllers
const danhMucController = require('./controllers/danhmuc-controller.js');

const app = express();

app.listen(3000, () => console.log('Server started...'))

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/api/get-data', danhMucController.getAll);

app.post('/api/post-data', danhMucController.create);