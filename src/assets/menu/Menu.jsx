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
    <div id='menu-div'></div>
  )
}

export default Menu