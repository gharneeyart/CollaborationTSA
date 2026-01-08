import SideBar from "./components/SideBar";
import "./App.css";    
import React from 'react'
import Signup from './signup'
import { Navbar } from './components/Navbar.jsx'
import './App.css'
import Cta from './Cta'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <Cta/>
     <Signup />
      <Navbar/>
     <SideBar />
    </>
  );
}

export default App;
