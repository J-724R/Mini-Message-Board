import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [dogs, setDogs] = useState();
  const [count, setCount] = useState(0)

  return (
    <>
      Hello Dog!
    </>
  )
}

export default App
