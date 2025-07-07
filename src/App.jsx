import { useState } from 'react';
import './styles/App.css';
import Navbar from './assets/navbar/Navbar.jsx';
import Menu from './assets/menu/Menu.jsx';
import HomeSlider from './assets/home-slider/Home-slider.jsx';
import HomeNews from './assets/home-news/Home-news.jsx';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <main id="main">
      <Navbar/>
      <Menu/>
      <h1 id="title">Welcome to "The" Game Shop</h1>
      <HomeSlider/>
      <HomeNews/>
    </main>
  )
}

export default App
