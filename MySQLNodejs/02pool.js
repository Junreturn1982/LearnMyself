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

app.get('/', (req, res) => {
    const sql = `SELECT * FROM danhmuc`;
    queryDB(sql, (err, result) => {
        if (err) return res.send(err);
         res.json(result);
    });
});