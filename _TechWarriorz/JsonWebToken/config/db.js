const mysql = require('mysql');

const config = require('./config.js');

const connectpool  = mysql.createPool({
  connectionLimit : 10,
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database
});

let queryDB = (sql, objData) => {
    return new Promise((resolve, reject) => {
        connectpool.getConnection(function(err, connection) {
            if(err) {
                connection.release();
                return cb(err, undefined);
            } else {
                connection.query(sql, objData, (error, results, fields) => {
                    // And done with the connection.
                    connection.release();
                    // Handle error after the release.
                    if (error) return reject(err);
                    // console.log(fields);
                    resolve(results);
                    // Don't use the connection here, it has been returned to the pool. 
                });
            }
        });
    });
}

// queryDB(`SELECT * FROM danhmuc`, {})
// .then(result => console.log(result[0]))
// .catch(err => console.log(err+''))

module.exports = queryDB;