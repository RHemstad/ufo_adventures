
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import React from 'react'

const Nav = () => {
  return (
    <>

         {/* part of the reponsive hamburger nav menu */}
         <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle"><div class='menu-button'></div></label>

<nav class="menu">

    <ul>
    <li><Link to="/">Home</Link></li>
    </ul>


    </nav>
    



    </>
  )
}

export default Nav