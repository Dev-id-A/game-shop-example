import React from 'react'
import "./navbar.css"

function navbar() {
  return (
    <div id="navbar" className="d-flex justify-content-between">
      
        <a href="" id="nav-home" className="col-3">Home</a>
        <a href="" id="nav-videogames" className="col-3">Videogames</a>
        <a href="" id="nav-accesories" className="col-3">Accesories</a>
        <a href="" id="nav-profile" className="col-3"><i class="bi bi-person-circle"></i></a>

    </div>

  )
}

export default navbar