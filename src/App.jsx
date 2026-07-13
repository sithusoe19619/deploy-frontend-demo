import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://deploy-backend-demo.onrender.com/users')
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
