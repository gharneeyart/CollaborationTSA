import React from 'react'
import Signup from './signup'
import { Navbar } from './components/Navbar.jsx'
import './App.css'
import Cta from './Cta'
import NavBar from './Navbar'

function App() {

  return (
    <>
      <Cta/>
     <Signup />
      <Navbar/>
    </>
  )
}
export default App
