import React from 'react';
import "./home-scroll.css";

const HomeScroll = () => {
  
  return (
    <div id="scroll-div" className="container col-12 row gap-4">
      <button id="scroll-left-btn" className='col-1'><i className="bi bi-caret-left-fill"></i></button>
      <div id="scroll-img" className="col-10"></div>
      <button id="scroll-right-btn" className="col-1"><i className="bi bi-caret-right-fill"></i></button>
    </div>
  )
}

export default HomeScroll