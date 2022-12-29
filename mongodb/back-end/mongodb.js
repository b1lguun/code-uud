const mongoose = require("mongoose");

const uri =
  "mongodb+srv://bilguun:AsId0.00@mongo.ywtcnkw.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database is successfully connected.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
