import { Request, Response } from "express";
import Dog from "../models/Dog";

export async function createDogController( req: Request, res: Response) {
  const newDog = new Dog({
    name: "Ryuk",
    age: 7,
    breed: "Mix",
  })
  
  const createdDog = await newDog.save();

  console.log(createdDog);
  return res.send(createdDog)
}