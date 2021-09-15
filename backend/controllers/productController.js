exports.getProducts = (req,res,next)=>{
    res.status(200).json({
        success:true,
        message:'This will show all the data from the database.'
    })
}