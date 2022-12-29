const mongoose = require("mongoose");

const uri =
  "mongodb+srv://bilguun:AsId0.00@mongo.ywtcnkw.mongodb.net/instagram?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
