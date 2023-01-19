const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "To-Do App" });
});

app.listen(8000, () => {
  console.log("server running on port 8000");
});
