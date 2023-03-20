const mongoose = require("mongoose");

const connectDB = (uri) => {
  return mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
