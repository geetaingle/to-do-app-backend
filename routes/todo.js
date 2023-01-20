const express = require("express");

const router = express.Router();

const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (e) {
    res.send(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const todo = await new Todo(req.body).save();
    res.send(todo);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
