import { TDogs } from "../types/dogTypes";
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

export async function createDog(name: string, age: number, breed: string) {
  const response = await fetch(`${API_URL}/Dog`, {
    method: "POST",
    body: JSON.stringify({
      name,
      age,
      breed
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function getDogs(): Promise<TDogs[]> {
  const response = await fetch(`${API_URL}/Dogs`);
  return response.json();
}