import { Request, Response } from "express";
import Dog from "../models/Dog";

export async function getDogsController( req: Request, res: Response) {
  const dogs = await Dog.find();
  res.json(dogs)
}