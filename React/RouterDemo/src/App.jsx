import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from "./pages/Contact.jsx";
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/about">About</Link> | {" "}
                <Link to="/contact">Contact</Link> | {" "}
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
