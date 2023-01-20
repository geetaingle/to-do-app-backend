const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Todo Schema

const TodoSchema = new Schema({
  taskName: {
    type: String,
    required: ["true", "The todo text field is required"],
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
