
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import { useUpdateUserName } from "../profile/UserContextProvider";
import { useUserName } from "../profile/UserContextProvider";
import { useState } from "react";

const Nav = () => {

  const navigate = useNavigate();

  //userName is coming from the UserContextProvider - using the custom hook useUserName
  const updateUserName = useUpdateUserName();
  const userName = useUserName();
  let [newUserName] = useState(userName);

  const signOutUserName = (e) => {
    e.preventDefault();
    updateUserName(newUserName = "");
    navigate('/')
  };




  return (
    <>

         {/* part of the reponsive hamburger nav menu */}
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle"><div className='menu-button'></div></label>

<nav className="menu">

    <ul>
    <li><Link to="/">Home</Link></li>
  <li>{userName !== "" ? `Welcome ${userName}` : <Link to="profile">Sign In</Link>}</li>
        <li>{userName !== "" &&  <Link onClick={signOutUserName}>Sign Out</Link> }</li>
    </ul>


    </nav>
    



    </>
  )
}

export default Nav