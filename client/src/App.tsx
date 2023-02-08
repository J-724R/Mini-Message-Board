import { useEffect, useState } from 'react'
import DogForm from './components/dogForm';
import './App.css'
import { getDogs, createDog } from './api/dog';

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000";


type TDogs = {
  name: string;
  age: number | "";
  breed: string;
  _id?: string;
};


function App() {
  const [dogs, setDogs] = useState<TDogs[]>([]);
  const [dogDB, setDogDb] = useState({});
  const [dog, setDog] = useState<TDogs>({
    name: "",
    age: "",
    breed: ""
  });
    

  useEffect(() => {
    async function fetchDog() {
      const Dogs = await getDogs();
      setDogs(Dogs);
      console.log(Dogs);
    }
    fetchDog()
  }, [dogDB]);

  return (
    <>
      <h2>Dogs Journal</h2>
      <div>
        {dogs.map((dog) => (
          <div key={dog._id}>
            {`${dog.name}`}
          </div>
        ))}

      </div>
      
      <DogForm 
        dogDb = {dogDB}
        setDogDB = {setDogDb}
      />


      {/* <form onSubmit={handleCreateDog}>
        <label htmlFor="dog-name">Dog Name: </label>
        <input
          id="dog-name"
          value={dog.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDog({...dog, name:e.target.value});
          }}
        />
        <label htmlFor="dog-age">Dog Age: </label>
        <input
          id="dog-age"
          value={dog.age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDog({...dog, age:Number(e.target.value)});
          }}
        />
        <label htmlFor="dog-bredd">Dog Breed: </label>
        <input
          id="dog-bredd"
          value={dog.breed}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDog({...dog, breed:e.target.value});
          }}
        />
        <button>Create Deck</button>
      </form> */}
    </>
  )
}

export default App
