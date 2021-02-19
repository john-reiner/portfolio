import React, { useState, useEffect } from 'react';

import Landing from './components/Landing.js'
import ProjectShow from './components/ProjectShow'

function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = () => {
    fetch('http://localhost:3001/users/1')
    .then(response => response.json())
    .then(user => setUser(user))
  }
  console.log(user)
  return (
    <div>

      <Landing 
        first_name={user.first_name} 
        last_name={user.last_name}
        email={user.email}
        links={user.links}
        />
      
      <projectShow />

    </div>
  );
}

export default App;

