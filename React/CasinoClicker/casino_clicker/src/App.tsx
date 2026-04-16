import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState<Number>(1)
  const winningNumber = 7;

  const genNumber = () =>{
    const num : Number = Math.floor(Math.random() * 10) + 1
    setNum(num);
  }

  return (
    <>
      <h1>Casino Clicker</h1>
      <p>{num.toString()}</p>
      {num === winningNumber ? <p>You've won!</p> : <button onClick={genNumber}>Click Me!</button>}
    </>
  )
}

export default App
