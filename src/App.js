import React, { useState, useEffect } from 'react';

import Landing from './components/Landing.js'

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
      <Landing name={user.first_name + " " + user.last_name} />
    </div>
  );
}

export default App;
