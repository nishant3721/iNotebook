const mongoose = require("mongoose");

// const mongoUri =
//   "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const mongoUri =
  "mongodb+srv://Nikhil:euWppq372001@inotebook.kumwf.mongodb.net/iNotebook?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(process.env.MONGODB_URI || mongoUri, () => {
    console.log("Mongo connected successfully");
  });
};

module.exports = connectToMongo;
