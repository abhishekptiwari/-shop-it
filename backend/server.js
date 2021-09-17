const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const db = require('./config/database')


//Setting up Config File
dotenv.config({path:'./config.env'});

//Connecting to database
db();


//Server
app.listen(process.env.PORT,()=>{
    console.log(`Server Running on Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})