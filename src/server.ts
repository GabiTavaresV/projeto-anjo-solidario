import express from "express";
import mongoose from "mongoose";
import ongRouter from "./routes/index";
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(ongRouter);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.iew3ykh.mongodb.net/?retryWrites=true&w=majority`
    
  )
  .then((data) => {
    console.log("MongoDB Connection Succeeded");
  })
  .catch((err) => {
    console.log("Error in BD connection", err.message);
  });

app.listen(PORT, () => console.log("Server running!"));

console.log('PORT', process.env.PORT)