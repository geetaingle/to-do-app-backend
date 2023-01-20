const express = require("express");
const cors = require("cors");
const todos = require("./routes/todo");
const connection = require("./db");
const app = express();

connection();

app.use(express.json());
app.use(cors());
app.use("/api/todos", todos);

// mongoose.set("useFindandModify", false);

// mongoose.connect(process.env.DB_CONNECT, { useNewUrlPArser: true }, () => {
//   console.log("connected to db");

//   app.listen(8000, () => {
//     console.log("server running on port 8000");
//   });
// });

// app.get("/message", (req, res) => {
//   res.json({ message: "To-Do App" });
// });

app.listen(8000, () => {
  console.log("server running on port 8000");
});
