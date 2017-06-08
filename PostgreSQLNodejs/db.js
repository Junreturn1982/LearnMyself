const pg = require('pg');

const config = {
  user: 'postgres', //env var: PGUSER
  database: 'NODE0704', //env var: PGDATABASE
  password: 'rootPassw0rd', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);

function queryDB(sql, cb) {
    pool.connect((err, client, done) => {
        if (err) return cb(err, undefined);
        client.query(sql, (errQuery, result) => {
            //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
            done(errQuery);
            if (errQuery) return cb(errQuery, undefined);
            cb(undefined, result);
        });
    });
}

const queryDBParam = (sql, arrayData, cb) => {
    pool.connect((err, client, done) => {
        if (err) return cb(err, undefined);
        client.query(sql, arrayData, (errQuery, result) => {
            done(errQuery);
            if (errQuery) return cb(errQuery, undefined);
            cb(undefined, result);
        });
    });
}

queryDB('Select * from "Product"', (err, result) => {
    if(err) return console.log(err+'');
    console.log(result.rows);
});

module.exports = {
    queryDB,
    queryDBParam
};

