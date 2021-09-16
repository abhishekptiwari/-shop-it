const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name:{
      type:String,
      required:[true,'Please enter the product name'],
      trim:true,
      maxlength:[100,'Product name connot exceed 100 character']
  },
  price:{
    type:Number,
    required:[true,'Please enter the product price'],
    trim:true,
    maxlength:[7,'Product price connot exceed 7 character'],
    default:0.0
  },
  description:{
    type:String,
    required:[true,'Please enter the product description'],
  },
  ratings:{
      type:{
        type:Number,
        default:0
      }  
  },
  images:[
      {
        public_id:{
          type:String,
          required:true
        },
        url:{
            type:String,
            required:true
        }
      }
  ],
  category:{
      type:String,
      required:[true,'Please select category for this product'],
      enum:{
        values:[
          'Electronics',
          'Cameras',
          'Laptop',
          'Accessories',
          'Headphones',
          'Food',
          'Books',
          'Clothes/Shoes',
          'Beauty/Health',
          'Sports',
          'Outdoor',
          'Home'
        ],
        message:'Please select correct category for product'
      }
  },
  seller:{
      type:String,
      required:[true,'Please enter the product seller']
  },
  stock:{
      type:Number,
      required:[true,'Please enter the product stock'],
      maxlength:[5,'Product name cannot exceed 5 characters'],
      default:0
  },
  
})


module.exports=mongoose.model('Product',productSchema);