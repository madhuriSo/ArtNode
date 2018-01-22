var log = require('loglevel');
var mongoose = require('mongoose');
module.exports=(function (cfg) {
   var db= mongoose.connection;
   db.on('error',console.error);
   db.once('open',function(){
       log.info('Database connection.');
   });

    mongoose.connect('mongodb://'+cfg.ip+':27017/'+cfg.db);
    log.info('Database connected successfully.');

});