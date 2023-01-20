const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      "mongodb+srv://geeta:12345@to-do-app.qpxehtw.mongodb.net/test"
    );
    console.log("Connected to database.");
  } catch (e) {
    console.log("Could not connect to db.\n", e);
  }
};
