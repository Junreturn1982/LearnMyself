const jwt = require('jsonwebtoken');

module.exports.authenticate = (req, res) => {
    let user = {
        username: 'Hoang',
        email: 'hoang@gmail.com'
    }
    let token = jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: 4000
    });

    res.json({
        success: true,
        token
    });
}