import { config } from "dotenv"; config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { appendFile } from "fs";

// import controllers

const PORT = process.env.PORT;

const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL!).then(() => {
  console.log(`Listening on port: ${PORT}`);
  app.listen(PORT);
})