
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import React from 'react'

const Nav = () => {
  return (
    <>

         {/* part of the reponsive hamburger nav menu */}
         <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle"><div className='menu-button'></div></label>

<nav className="menu">

    <ul>
    <li><Link to="/">Home</Link></li>
    </ul>


    </nav>
    



    </>
  )
}

export default Nav