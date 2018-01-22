
var mongoose = require('mongoose');
var express = require("express");
var app     = express();
var path    = require("path");
app.use(express.json()); //express can generate json response
var bodyParser = require('body-parser');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));

});

var cfg={ip:"localhost",db:"artStore"};
var monogdb=require('./gallery/db/mongoosedb');
monogdb(cfg);
require('./gallery/controller/customerController')(app);

app.listen(5000);
console.log("Connected to port 5000");


app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.htm'));
});

