function Sanna() {
    // var list = ["Sanna", "Adrien", "Alex"];
    // const a = list.map(elem => <p>I'm {elem} </p>);
    // return (
    //  a[0]
    // );

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