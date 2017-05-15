const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server started'));

const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootPassw0rd',
  database : 'nha_dat',
  multipleStatements: false
});

// transaction
function testTransaction() {
    connection.beginTransaction(function(err) {
        if (err) { throw err; }
        connection.query('INSERT INTO danhmuc SET Ten=?', 'a', function (error, results, fields) {
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
                // connection.end();
            });
            });
        }); // end insert danh muc
    });
}
app.get('/', (req, res) => {
    testTransaction();
    res.send('Transaction test');
});