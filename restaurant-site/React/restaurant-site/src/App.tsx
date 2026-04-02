
import './App.css'
import spaceStopImage from './assets/space-stop-5.png'

function App() {


  return (
    <>
      <div className="flex justify-center dark:bg-black">
        <div className={"flex flex-col items-center"}>
          <h1 className={"font-audiowide text-8xl mb-7 text-red-600 text-shadow-galaxy"}>Gus's Galaxy Grill</h1>
          <div className={"flex flex-row"}>
            <h2 className={"font-gugi flex flex-row justify-between items-center text-6xl gap-10"}>
              <span className={"font-dafoe -rotate-8 text-7xl text-blue-300 text-shadow-space-eats"}>Space Eats</span>
              <span className={"text-red-300 text-shadow-from"}>from</span>
              <img className={"drop-shadow-[5px_5_px_10px_rgba(247, 245, 243)]"} src={spaceStopImage} alt="SPACE STOP 5"/></h2>
          </div>
        </div>
      </div>
    </>
  //filter: drop-shadow(5px 5px 10px rgb(247, 245, 243))

      /*
      h1 {
    font-family: "Audiowide", serif;
    line-height: 1em;
    color: #db1313;
    font-weight: bold;
    font-size: 120px;
    text-shadow: 0px 0px 0 rgb(224, 221, 220), 1px 1px 0 rgb(209, 206, 205), 2px 2px 0 rgb(195, 192, 191), 3px 3px 0 rgb(180, 177, 176), 4px 4px 0 rgb(166, 163, 162), 5px 5px 0 rgb(151, 148, 147), 6px 6px 0 rgb(137, 134, 133), 7px 7px 6px rgba(0, 0, 0, 0), 7px 7px 1px rgba(0, 0, 0, 0.5), 0px 0px 6px rgba(0, 0, 0, .2);
    margin-bottom: 1rem;
}
       */
  )
}

export default App
