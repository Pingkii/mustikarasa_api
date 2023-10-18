'use strict';

module.exports = function(app){
    var jsonku = require('./controller');
    
    app.route('/')
        .get(jsonku.index);

    app.route('/resep')
        .get(jsonku.resep);

    app.route('/resep/:id_resep/:tipe')
        .get(jsonku.bahan);

}        