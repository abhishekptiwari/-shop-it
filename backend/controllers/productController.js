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


exports.getProducts = async  (req,res,next)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        message:'All the data from the database.',
        length:products.length,
        data:products
    })
}

//GET single product details  =>    /api/v1/product/:id
exports.getSingleProduct= async (req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        res.status(404).json({
            success:false,
            message:"Product not found"
        })
    }
    else{
        res.status(200).json({
            success:false,
            Product:product
        })

    }
}


exports.updateProduct = async (req,res,next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
       return  res.status(404).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success:true,
        message:"Product Updated Successfully",
        product
    })

}

//Delete Product => /api/v1/admin/product/:id

exports.deleteProduct = async (req,res,next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
       return  res.status(404).json({
            success:false,
            message:"Product not found"
        })
    }

    await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success:true,
        meaasge:"Product deleted Successfully",
    })

}