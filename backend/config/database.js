const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();


const db = ()=>{

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('DB connection Successful 🔥'))
.catch((err) => {
  console.log("database connection failed. exiting now...");
  console.error(err);
  process.exit(1);
})

}

module.exports = db;




