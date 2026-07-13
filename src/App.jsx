import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const BASE_API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch(BASE_API_URL + '/users')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUsers(data)
      })
  }, [])

  return (
    <div>
      <h1>My Deployed App!</h1>

      {
        users.map((u) => (
          <p key={u.id}>User: {u.name}</p>
        ))
      }
    </div>
  )
}

export default App
