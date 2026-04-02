
import {useEffect, useState} from "react";

function App() {
    const [url, setUrl] = useState("");
    useEffect(()=>{
        dogImageApiCall();
    },[])
  type dogMessage = {
    message: string,
    status: string
  }

  const handleClick = () =>{
        setUrl("");
        dogImageApiCall();
  }

  const dogImageApiCall = async()=>{
    fetch('https://dog.ceo/api/breeds/image/random').then(async(response) =>{
      if (response.ok){
        let data: dogMessage = await response.json() as dogMessage;
        setUrl(data.message);
      }
    })
  }

  return (
      <>
          <div className={"flex-col justify-evenly"}>
              <div className={"text-6xl"}>
                  I am the App.
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick()}>
                  Refresh image
              </button>
              <div className="flex justify-center">

                  {url != "" ? <img src={url} alt="None"/> : <div className={"h-6 w-6 animate-spin rounded-full border-b-2 border-current"}></div>}
              </div>
          </div>
      </>
  )
}

export default App
