const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network-api";

mongoose.set("strictQuery", false);
mongoose.connect(mongoURI, {
  useNewURLParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to database");
}).catch((error) => {
  console.log(`Error connecting to database: ${error.message}`);
});

mongoose.set("debug", true);

module.exports = mongoose.connection;