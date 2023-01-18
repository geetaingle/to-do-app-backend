import express from "express";
import cors from "cors";
import client from "./db";

const app = express();

client.connect((err) => {
  if (err) {
    console.log("Error connecting to the database");
    return;
  }

  app.listen(3080, () => {
    console.log("server running on port 3080");
  });
});
