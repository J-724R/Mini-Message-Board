import { config } from "dotenv"; config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
mongoose.set('strictQuery', false);

// import controllers
import { createDogController } from "./controllers/DogController";

const PORT = process.env.PORT;

const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());

// app.use('/', (req, res) =>{
//   return res.send('Hellow world')
// })

// Test 1
app.use("/Dog", createDogController)




mongoose.connect(process.env.MONGODB_URL!).then(() => {
  console.log(`Listening on port: ${PORT}`);
  app.listen(PORT);
})