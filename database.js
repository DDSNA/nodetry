//added mysql code
var mysql = require('mysql');
 
var con = mysql.createConnection({
    host: "containers-us-west-108.railway.app",
    user: "root",
    password: "nE38bR3VewITIphS5sJe",
    database: "railway"
  
  });
con.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully!')
});
module.exports = conn;