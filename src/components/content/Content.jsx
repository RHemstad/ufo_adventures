import "./content.css";
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from "../home/Home";
import Tickets from "../tickets/Tickets";
import PackingChecklist from "../packing_checklist/PackingChecklist";
import Weather from "../weather/Weather"
import PackingItems from "../packing_checklist/PackingItems";

const Content = () => {
  return (
    <>

<main>

   
   <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/tickets" element={<Tickets />} />
          <Route path="/packingchecklist" element={<PackingChecklist />} />
          <Route path="/weather" element={<Weather />} />
   </Routes>



   </main>
    
    
    </>
  )
}

export default Content