const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server started'));

const mysql = require('mysql');
const connectpool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : 'rootPassw0rd',
  database : 'nha_dat'
});
// connectpool.getConnection(function(err, connection) {
//   connection.query( 'START TRANSACTION', function(err, rows) {
//     // do all sql statements with connection and then
//     connection.query( 'COMMIT', function(err, rows) {
//        connection.release();
//     });       
//   });
// });
let queryDB = (sql, cb) => {
    connectpool.getConnection(function(err, connection) {
        if(err) {
            connection.release();
            return cb(err, undefined);
        } else {
            console.log('Connected');
            connection.query(sql, (error, results, fields) => {
                // And done with the connection.
                connection.release();
                // Handle error after the release.
                if (error) return cb(err);
                // console.log(fields);
                cb(results);
                // Don't use the connection here, it has been returned to the pool. 
            });
        }
    });
}
// transaction
let transaction = (cb) => {
    connectpool.getConnection(function(err, connection) {
        connection.beginTransaction(function(err) {
            if (err) { throw err; }
            connection.query('INSERT INTO danhmuc SET Ten=?', 'Test transaction', function (error, results, fields) {
                if (error) {
                return connection.rollback(function() {
                    throw error;
                });
                }

                let log = 'Post ' + results.insertId + ' added';
                let objDanhMuc = {
                    Ten: log,
                    idDanhMuc: results.insertId
                };

                connection.query('INSERT INTO loaisanpham SET ?', objDanhMuc, function (error, results, fields) {
                if (error) {
                    return connection.rollback(function() {
                        connection.release();
                        throw error;
                    });
                }
                connection.commit(function(err) {
                    if (err) {
                    return connection.rollback(function() {
                        throw err;
                    });
                    }
                    console.log('success!');
                    connection.release();
                });
                });
            }); // end insert danh muc
        }); // end beginTransaction
    });
}
app.get('/', (req, res) => {
    transaction();
    res.send('Transaction test');
});