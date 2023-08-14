import "./content.css";
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from "../home/Home";
import TicketCheckout from "../tickets/TicketCheckout";
import TicketConfirmation from "../tickets/TicketConfirmation";
import PackingChecklist from "../packing_checklist/PackingChecklist";
import Weather from "../weather/Weather"
import Game from "../game/Game"

import background from '../../assets/images/background.svg';


const Content = () => {
  return (
    <>

<main>

   
   <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/tickets" element={<TicketCheckout />} />
       <Route path="/ticketconfirmation" element={<TicketConfirmation />} />
      <Route path="/packingchecklist" element={<PackingChecklist />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/game" element={<Game />} />
   </Routes>



   </main>
    
    
    </>
  )
}

export default Content