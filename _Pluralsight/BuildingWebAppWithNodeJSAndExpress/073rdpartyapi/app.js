const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');

const app = express();

const port = process.env.PORT || 3000;
const nav = [
                {link: '/Books', text: 'Book'},
                {link: '/Authors', text: 'Author'}
            ];
const bookRouter = require('./src/routes/bookRoutes')(nav);
// router functions
const authorRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const authRouter = require('./src/routes/authRoutes')(nav);

app.listen(port, () => console.log('running server on port ' + port));

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'library',
    cookie: { maxAge : 180000 }, //1 Hour = 3600000
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
require('./src/config/passport')(app);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Authors', authorRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/', (req, res) => {
    res.render('index', { title: '', nav: [
        {link: '/Books', text: 'Books'},
        {link: '/Authors', text: 'Authors'}
    ]});
});