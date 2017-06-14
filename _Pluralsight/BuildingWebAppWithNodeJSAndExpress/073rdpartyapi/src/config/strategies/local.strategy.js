// const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongodb = require('mongodb').MongoClient;

module.exports = function (passport) {
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, 
    (username, password, done) => {
        let url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, (err, db) => {
            let collection = db.collection('users');
            collection.findOne({
                username
            }, (err, results) => {
                if(results === null) return done('Fail', undefined);
                if(results.password === password) {
                    var user = results;
                    console.log('local: ' + JSON.stringify(user));
                    // callback done(err, result)
                    done(null, user);
                } else {
                    done(null, false, {message: 'Bad password'});
                }
            }
            );
        });
    }));
};