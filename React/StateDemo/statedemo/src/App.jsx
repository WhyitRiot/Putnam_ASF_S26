import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const handleMouse = (e) =>{
    setY(e.screenX);
    setX(e.screenY);
    setWidth(x);
    setHeight(y);
  }
  return (

    <body onMouseMove={e => handleMouse(e)}>
    <h1>I am the app</h1>
    <p>{x} {y}</p>
    <img src="https://images.pixels.com/images/artworkimages/mediumlarge/3/handsome-squidward-from-spongebob-squarepants-santos.jpg"
         alt="Ward"
    width={width}
    height={height}/>
    </body>

  )
}

export default App
