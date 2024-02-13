import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("db connecred..."))
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRouter);

app.listen(3002, () => {
  console.log("Server running on 3002...");
});
