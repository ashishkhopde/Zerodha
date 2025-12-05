import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/connectDB.js";

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})