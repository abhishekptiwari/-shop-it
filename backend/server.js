const app = require('./app');
const dotenv = require('dotenv');

//Setting up Config File
dotenv.config({path:'backend/config/config.env'});

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on Port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})