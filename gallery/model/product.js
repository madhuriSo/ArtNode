var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
        pid: {type: String, required: true, unique: true},
        name: {type: String},
        color: {type: String},
        price: {type: String},
        weight: {type: String},
        image: {type: String},
        description: {type: String},
        doe: {type: Date},
        dom: {type:Date}

    });

ProductSchema.pre('save',function(next){
    var currentDate=new Date();
    this.dom=currentDate;
    if(!this.doe){
        this.doe=currentDate;
    }
    next();
})

module.exports=mongoose.model('Products',ProductSchema);