const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongob://localhost:27017/social-network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;
