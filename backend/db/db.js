const mongoose = require("mongoose");
require("dotenv").config();

//NOTE:: Database connection
const uri = process.env.DB_URI;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connection with the database is established");
  }
);
