const Product = require('../models/product')


//Create new Product => /api/v1/product/new
exports.newProduct = async (req,res,next)=>{
    const product = await Product.create(req.body);

    req.status(201).json({
        success:true,
        Data: product
    })
}


exports.getProducts = (req,res,next)=>{
    res.status(200).json({
        success:true,
        message:'This will show all the data from the database.'
    })
}