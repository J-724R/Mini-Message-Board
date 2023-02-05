import { config } from "dotenv"; config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
mongoose.set('strictQuery', false);

// import controllers
import { createDogController } from "./controllers/createDogController";
import { getDogsController } from "./controllers/getDogsController";

const PORT = process.env.PORT;

const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());

// Test 1
app.post("/Dog", createDogController);
app.get("/Dogs", getDogsController);


mongoose.connect(process.env.MONGODB_URL!).then(() => {
  console.log(`Listening on port: ${PORT}`);
  app.listen(PORT);
})