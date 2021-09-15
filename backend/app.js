const express = require('express');
const products = require('../backend/routes/product')

const app = express();

app.use(express.json())

//Import  all routes 
app.use('/api/v1',products);



module.exports = app;
