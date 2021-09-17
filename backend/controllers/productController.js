const Product = require('../models/product')


//Create new Product => /api/v1/product/new
exports.newProduct = async (req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        Data: product
    })
    product.save()
}


exports.getProducts =async  (req,res,next)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        message:'All the data from the database.',
        length:products.length,
        data:products
    })
}