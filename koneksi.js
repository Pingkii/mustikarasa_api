var mysql = require('mysql');

//koneksi database

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mustikarasa',
    port: 3306

});

conn.connect((err) => {
    if (err) throw err;
    console.log('mysql terkoneksi');
});

module.exports = conn;
