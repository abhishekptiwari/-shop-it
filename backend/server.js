const app = require('./app');
const dotenv = require('dotenv');
const db = require('./config/database');


//Setting up Config File
dotenv.config({path:'./config.env'});


//Handle Ucaught exceptions
process.on('uncaughtException',err=>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down due to uncaught exceptions');
    process.exit(1); 
});

//Connecting to database
db();
        

//Server
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Running on Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});


//Handle Unhandled Promise rejections
process.on('unhandledRejection', err =>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(()=>{
        process.exit(1);
    });
});
