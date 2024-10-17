import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      
      <div id="navbar">
        <Link to ="/blue">Blue</Link>
        <Link to = "/red">Red</Link>

      </div>
      <div id="main-section">
        <Routes>
        <Route path = "/home" element = {<Home />} />
          <Route path = "/blue" element = {<Blue />} />
          <Route path = "/red" element = {<Red />} />
        </Routes>
        

      </div>
    </div>
    </>
  );
};

export default App
