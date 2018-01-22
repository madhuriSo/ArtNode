var Products=require('../model/product');

var ProductPersistence=function () {

};


ProductPersistence.prototype.saveProduct=function(product,callback){
    product.save(function(error,result){
        callback(error,'success');
    });
};

ProductPersistence.prototype.findProducts=function(callback){
    Products.find({},function(error,products){
        callback(error,products);
    });
};

ProductPersistence.prototype.findProductById=function(gpid,callback){

    Products.findOne({pid:gpid},function(error,product){
        callback(error,product);
    });
};

ProductPersistence.prototype.updateProductPrice=function (iproduct,callback) {
   Products.findOne({pid:iproduct.pid},function (err,result) {
       result.price=iproduct.price;
       result.save(function (err) {

               callback(err, result);


       });
   }); 
};



ProductPersistence.prototype.deleteProductById=function (ipid,callback) {
    Products.findByIdAndRemove(ipid,function (err,result) {


        });
    });
};
exports.ProductPersistence=ProductPersistence;