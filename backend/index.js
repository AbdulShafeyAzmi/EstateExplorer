import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("db connecred..."))
  .catch((err) => {
    console.log(err.message);
  });

app.listen(3002, () => {
  console.log("Server running on 3002...");
});
