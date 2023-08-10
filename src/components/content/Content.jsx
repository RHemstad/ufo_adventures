import "./content.css";
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from "../home/Home";
import Tickets from "../tickets/Tickets";

const Content = () => {
  return (
    <>

<main>

   
   <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/tickets" element={<Tickets />} />
   </Routes>



   </main>
    
    
    </>
  )
}

export default Content