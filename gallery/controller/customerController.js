var log = require('loglevel');
var Products=require('../model/product');

var ProductPersistence = require('../persistence/productdao').ProductPersistence;

var productPersistence=new ProductPersistence();

module.exports=function (app) {

    app.post('/product',function(req,res){
        log.info('uploading new product on server..');
        var productRequest=JSON.parse(JSON.stringify(req.body));
        log.info(productRequest.pid);
        var product = new Products();
        product.pid=productRequest.pid;
        product.name=productRequest.name;
        product.color=productRequest.color;
        product.price=productRequest.price;
        product.weight=productRequest.weight;
        product.image=productRequest.image;
        product.description=productRequest.description;

        log.info(product.pid);
        productPersistence.saveProduct(product,function (error,result) {
            if(error){
                log.error("Error selecting : %s",error);
            }
            res.json(result);

        });

    });

    app.get('/product/:pid',function(req,res){

        var gpid=req.params.pid;
        productPersistence.findProductById(gpid,function(error,result){
            if(error){
                log.error("Error in selection : %s",error);
            }else{
                res.json(result);
            }
        });
    });

    app.get('/insert',function(req,res){
        var product={};
        product.pid='p3200';
        product.name='wooden table';
        product.color='brown';
        product.price='400';
        product.weight='50';
        product.image='loading';
        product.description='Wooden table with polish';

        res.json(product);
    });


    app.put('/product',function(req,res){
        var iprice=req.body.price;
        var ipid=req.body.pid;

        console.log("inputs : price "+iprice);
        console.log("pid:"+ipid);
        productPersistence.updateProductPrice({price:iprice,pid:ipid},function (error,result) {
            if(error){
                res.json({status:"fail",message:error});

            }else{
                res.json({message:"Product price updated successfully ",result:result});
            }
        });

    });
    app.delete('/product/:pid',function(req,res){
        var ipid=req.params.pid;
        productPersistence.deleteProductById(ipid,function(error,result){
            if(error){
                console.log("Error to delete :"+console);
            }else{
                res.json({"status:success",result:result});
            }
        });


    });


}