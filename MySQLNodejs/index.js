const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootPassw0rd',
  database : 'nha_dat',
  multipleStatements: false
});

connection.connect();

connection.query('SELECT * FROM danhmuc', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].Ten);
});
// connection.escape(id);
connection.query('SELECT * FROM danhmuc WHERE id = ?', 1, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

let objDanhMuc = {
    Ten: 'Hàng nhà làm'
};

let query = connection.query('insert into danhmuc set ?', objDanhMuc, (err, result) => {
    if(err) {
        console.error(err);
        return;
    }
    console.error(result);
    console.log(query.sql);
});

connection.end();