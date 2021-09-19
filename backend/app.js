const express = require('express');
const products = require('../backend/routes/product');

const errorMiddleware = require('./middlewares/errors')

const app = express();

app.use(express.json())

//Import  all routes 
app.use('/api/v1',products);

//Middleware to handle error
app.use(errorMiddleware)



module.exports = app;
