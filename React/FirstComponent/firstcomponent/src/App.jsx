import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AnimalLover from "./components/AnimalLover.jsx";

const App = () => {
  return (
      <>
        <h1>My Component</h1>
        <AnimalLover data={"What"} groggy = {"Pop or push"} lisanalghaib={"Mu'adib"}
        animalArray={["Fish", "Camel", "Giant fucking spider or something"]}/>
      </>
  )
}

export default App
