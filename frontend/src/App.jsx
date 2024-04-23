import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.log(error)
    }
    )
  })
  return (
    <>
      <h1>Connect and Learn junaid</h1>
      <p>name{jokes.length}</p>
      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.name}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
