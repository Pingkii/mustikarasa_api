'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');
// const fs = require('fs');
// const multer = require('multer');
// const upload = multer({ dest: './public' });

exports.index = function(req,res){
    response.ok("aplikasi REST API berjalan",res)
};

//menampilkan data pada databese
exports.resep = function(req, res){
    connection.query('Select * from resep', function(error, rows,fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan data per id
exports.bahan = function (req, res) {
    let id_resep = req.params.id_resep;
    let tipe = req.params.tipe;
    connection.query('SELECT * FROM bahan WHERE id_resep = ? AND tipe = ? ', [id_resep, tipe],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};