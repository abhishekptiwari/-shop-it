const express = require("express");
const products = require("../backend/routes/product");
const auth = require("../backend/routes/auth");

const errorMiddleware = require("./middlewares/errors");

const app = express();

app.use(express.json());

//Import  all routes
app.use("/api/v1", products);
app.use("/api/v1", auth);

//Middleware to handle error
app.use(errorMiddleware);

module.exports = app;
