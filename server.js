const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

// mongoose.set("useFindandModify", false);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlPArser: true }, () => {
  console.log("connected to db");

  app.listen(8000, () => {
    console.log("server running on port 8000");
  });
});

app.get("/message", (req, res) => {
  res.json({ message: "To-Do App" });
});
