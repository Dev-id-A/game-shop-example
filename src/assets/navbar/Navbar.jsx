import React from 'react';
import "./navbar.css";
import {showMenu, hideMenu} from "../menu/Menu";
import $ from "jquery";
import { useState } from 'react';

function navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const openSlide = e => {
    e.preventDefault();
    if(!toggleMenu){
      showMenu();
      setToggleMenu(true);
    }
    else{
      hideMenu();
      setToggleMenu(false);
    }
  };
  return (
    <div id="navbar" className="d-flex justify-content-between">

        <a href="" id="nav-menu" className="col-3" onClick={openSlide}><i id="menu-icon" class="bi bi-list"></i></a>
        <a href="" id="nav-home" className="col-3">Home</a>
        <a href="" id="nav-videogames" className="col-3">Videogames</a>
        <a href="" id="nav-accesories" className="col-3">Accesories</a>
        <a href="" id="nav-profile" className="col-3"><i class="bi bi-person-circle"></i></a>
        <a href="" id="nav-cart" className="col-3"><i class="bi bi-cart4"></i></a>

    </div>

  )
}

export default navbar