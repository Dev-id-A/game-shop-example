import { useState } from 'react'
import './styles/App.css'
import Navbar from './assets/navbar/Navbar.jsx'
import Menu from './assets/menu/Menu.jsx'

function App() {
  return (
    <main id="main">
      <Navbar/>
      <Menu/>
      <h1 id="title">Welcome to "The" Game Shop</h1>
    </main>
  )
}

export default App
