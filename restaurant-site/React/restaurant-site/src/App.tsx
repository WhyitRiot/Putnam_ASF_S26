import NavBar from "./components/NavBar.tsx"
import './App.css'
import Cart from "./pages/Cart.tsx";
import {Route, Routes} from "react-router";
import Reservations from "./pages/Reservations.tsx";
import Menu from "./pages/Menu.tsx";
import Hero from "./pages/Hero.tsx";

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reservations" element={<Reservations/>}></Route>
        <Route path={"/cart"} element={<Cart/>}></Route>
      </Routes>
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
