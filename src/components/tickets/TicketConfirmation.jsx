import './ticket_confirmation.css';
import React from 'react'
import {CheckoutContext} from "./TicketContextProvider"
import Subheader from '../subheader/Subheader.jsx'

const TicketConfirmation = () => {

  let {firstName, setEmail} = React.useContext(CheckoutContext);

  return (
    <>

<Subheader>Ticket Confirmed</Subheader>



    <section id="ticket-confirmation">
    <h3>Thank You {firstName} for your willingness to be abducted!</h3>
    <h4>It's victims (er, volunteers), like yourself, that help us learn more about humans.</h4>

<div>
    <div>Order Date: {new Date().toLocaleDateString()}</div>
    <div>Order Number: {Math.floor(Math.random() * 1000000)}</div>
    <div>Location Choice: Dallas</div>
    <div>Package Choice: VIP Package</div>
</div>






    </section>

    </>
  )
}

export default TicketConfirmation