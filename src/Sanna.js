import React, { useEffect, useState} from 'react'


function Sanna() {

    const [backendData, setBackendData] = useState([{}])

useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
}, [])
  return (
    <div>
      <h1> This project is made by:</h1>

      {(typeof backendData.users == 'undefined') ? (
        <p> Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
  }
  
  export default Sanna;