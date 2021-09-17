const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database')


//Setting up Config File
dotenv.config({path:'./config.env'});//'backend/config/config.env'

//Connecting to database
//connectDatabase();



app.listen(process.env.PORT,()=>{
    console.log(`Server Running on Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})