const Product = require('../models/product')
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

//Create new Product => /api/v1/product/new
exports.newProduct = catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        Data: product
    })
    //product.save()
})

exports.getProducts = catchAsyncErrors(async  (req,res,next)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        message:'All the data from the database.',
        length:products.length,
        data:products
    })
})

//GET single product details  =>    /api/v1/product/:id
exports.getSingleProduct= catchAsyncErrors(async (req,res,next)=>{

    const product = await Product.findById(req.params.id);

    console.log(product);

    if(!product){

        return next(new ErrorHandler('Product not found',404));

        // res.status(404).json({
        //     success:false,
        //     message:"Product not found"
        // })
    }
    else{
        res.status(200).json({
            success:false,
            Product:product
        })

    }
})


exports.updateProduct = catchAsyncErrors(async (req,res,next)=>{

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

})

//Delete Product => /api/v1/admin/product/:id

exports.deleteProduct = catchAsyncErrors(async (req,res,next)=>{

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

})