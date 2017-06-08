// https://github.com/brianc/node-postgres/wiki/Transactions
var Client = require('pg').Client;

const config = {
  user: 'postgres', //env var: PGUSER
  database: 'NODE0704', //env var: PGDATABASE
  password: 'rootPassw0rd', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var client = new Client(config);
client.connect();

var rollback = function(client) {
    //terminating a client connection will
    //automatically rollback any uncommitted transactions
    //so while it's not technically mandatory to call
    //ROLLBACK it is cleaner and more correct
    client.query('ROLLBACK', function() {
    client.end();
  });
};

client.query('BEGIN', function(err, result) {
  if(err) return rollback(client);
  client.query(`Update "Product" set "name" = 'Hoang Ngan' WHERE id = $1`, [1], function(err, result) {
    if(err) return rollback(client);
    client.query(`Update "Product" set "name" = 'Lan Phuong' WHERE id = $1`, [2], function(err, result) {
      if(err) return rollback(client);
      //disconnect after successful commit
      client.query('COMMIT', client.end.bind(client));
    });
  });
});
