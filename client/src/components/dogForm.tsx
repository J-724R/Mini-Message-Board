import React, { useEffect, useState } from "react";
import { createDog } from "../api/dog";
import { TDogs } from "../types/dogTypes";


export default function DogForm (props: any) {

  const {setDogDb, dogsDB} = props

  const [dog, setDog] = useState<TDogs>({
    name: "",
    age: "",
    breed: "",
    bio: ""
  });


  async function handleCreateDog(e: React.FormEvent) {
    e.preventDefault();
    const newDog = await createDog(dog.name, Number(dog.age), dog.breed);
    setDog({
      name: "",
      age: "",
      breed: "",
      bio: ""
    });
  }

  return (
    <form onSubmit={handleCreateDog}>
        <label htmlFor="dog-name">Dog Name </label>
        <input
          id="dog-name"
          value={dog.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDog({...dog, name:e.target.value});
          }}
        />
        <label htmlFor="dog-age">Dog Age </label>
        <input
          id="dog-age"
          value={dog.age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDog({...dog, age:Number(e.target.value)});
          }}
        />
        <label htmlFor="dog-bredd">Dog Breed </label>
        <input
          id="dog-bredd"
          value={dog.breed}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDog({...dog, breed:e.target.value});
          }}
        />
        <label htmlFor="dog-bredd">Bio </label>
        <input
          id="dog-bredd"
          value={dog.bio}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDog({...dog, bio:e.target.value});
          }}
        />
    <button>Add Dog</button>
    </form>
  )
}