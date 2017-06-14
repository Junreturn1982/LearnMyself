// const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, 
    (username, password, done) => {
        let user = {
            username: username,
            password: password
        };
        console.log('local: ' + JSON.stringify(user));
        // callback done(err, result)
        done(null, user);
    }));
}