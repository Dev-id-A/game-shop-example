import { useState } from 'react';
import './styles/App.css';
import Navbar from './assets/navbar/Navbar.jsx';
import Menu from './assets/menu/Menu.jsx';
import HomeScroll from './assets/home-scroll/Home-scroll.jsx';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <main id="main">
      <Navbar/>
      <Menu/>
      <h1 id="title">Welcome to "The" Game Shop</h1>
      <HomeScroll/>
    </main>
  )
}

export default App
