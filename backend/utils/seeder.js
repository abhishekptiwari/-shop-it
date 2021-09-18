const Product = require('../models/product')
const dotenv = require('dotenv');
const db = require('../config/database');
const products = require('../data/product');


//Setting dotenv file
dotenv.config({ path:'./config.env' })


//Database 
db();

const seedProducts = async ()=>{
   try{

    await Product.deleteMany();  
    console.log('All Products deleted.');

    await Product.insertMany(products);
    console.log('All Products added.');

    process.exit();

   }catch(error){
      console.log(error.message);
      process.exit();
   }
}

seedProducts();
