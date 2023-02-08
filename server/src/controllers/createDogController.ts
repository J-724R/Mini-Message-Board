import { Request, Response } from "express";
import Dog from "../models/Dog";

export async function createDogController( req: Request, res: Response) {
  const newDog = new Dog({
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
    bio: req.body.bio
  })
  
  const createdDog = await newDog.save();

  console.log(createdDog);
  return res.json(createdDog)
}