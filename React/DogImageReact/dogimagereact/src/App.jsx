import {useEffect, useState} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './App.css'


function App() {
  const [url, setUrl] = useState(null)
    useEffect(()=>{
        console.log("Use Effect")
        consumeApi();
    },[])

  const consumeApi = async() =>{
      console.log("Called")
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response =>{
          if (response.ok){
           return response.json();
          }
          else{
            console.log("error")
          }
        }).then(data => setUrl(data.message));
  }
  const handleClick = async (e) =>{
      console.log("Click")
      setUrl(null);
    await consumeApi();
  }
  return (
    <>
      <h1>I am app or whatever</h1>
      <button onClick={e => handleClick(e)}>Click me</button>
      {url ? <img src={url} alt=""/> : <div className={"justify-content-center"}><Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
      </Spinner></div>}
    </>
  )
}

export default App
