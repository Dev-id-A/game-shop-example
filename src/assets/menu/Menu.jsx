import React from 'react';
import "./menu.css";
import $ from 'jquery';

export const showMenu = () => {
        $("#menu-div").animate({
            left: "0vw"
        })
}

export const hideMenu = () => {
        $("#menu-div").animate({
            left: "-25vw"
        })
}

function Menu() {

  return (
    <div id='menu-div'>
      <a id="x-btn" onClick={hideMenu}><i className="bi bi-x-lg"></i></a>
      <input type="text" id="input-menu" placeholder="Pokémon, Gaming chair..."/>
      <button id="search-btn"><i className="bi bi-search"></i></button>
    </div>
  )
}

export default Menu