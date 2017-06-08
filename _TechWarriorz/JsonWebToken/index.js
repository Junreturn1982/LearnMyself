const express = require('express');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');

const app = express();
const secureRoutes = express.Router();

app.listen(3000, () => console.log('Server started...'))

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/secure-api', secureRoutes);

const config = require('./config/config.js');
config.setConfig();
// Controllers
const danhMucController = require('./controllers/danhmuc-controller.js');
const authenticateController = require('./controllers/auth-controller.js');

app.get('/api/authenticate', authenticateController.authenticate);

app.get('/api/get-data', danhMucController.getAll);

// validation middleware
secureRoutes.use((req, res, next) => {
    let token = req.body.token || req.headers['token'];

    if(token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
            if (err) {
                res.status(500).send('Invalid token');
            } else {
                next();
            }
        })
    } else {
        res.status(500).send('please send a token');
    }
});

secureRoutes.post('/post-data', danhMucController.create);