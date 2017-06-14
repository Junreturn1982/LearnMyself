const express = require('express');
const books = require('../../data/books');
const mongodb = require('mongodb').MongoClient;
const passport = require('passport');

const authRouter = express.Router();

const router = (val) => {
    authRouter.route('/signUp')
    .post((req, res) => {
        let url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, (err, db) => {
            let collection = db.collection('users');
            let user = {
                username: req.body.userName,
                password: req.body.password
            };
            collection.insert(user, (err, results) => {
                console.log(req.body);
                // it just add this particular user object to our session
                // and then Passport called our serializeUser, our deserializeUser
                // all of these pieces of information, and made that work
                req.login(results.ops[0], () => {
                    res.redirect('/auth/profile');
                });
                // db.close();
            });
        });
        
    });
   
    authRouter.route('/signIn')
    .post(passport.authenticate('local', {
        failureRedirect: '/'
    }),(req, res) => {
        res.redirect('/auth/profile');
    });
    
    authRouter.route('/profile')
    .all((req, res, next) => {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    })
    .get((req, res) => {
        res.json(req.user);
    });
    return authRouter;
};

module.exports = router;