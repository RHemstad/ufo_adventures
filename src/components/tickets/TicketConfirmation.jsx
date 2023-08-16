import './ticket_confirmation.css';
import React from 'react'
import {CheckoutContext} from "./TicketContextProvider"
import Subheader from '../subheader/Subheader.jsx'

const TicketConfirmation = () => {

  let {firstName, email, abductionDay, abductionLocation, abductionPackage} = React.useContext(CheckoutContext);

  return (
    <>

<Subheader>Ticket Confirmed</Subheader>

    <section id="ticket-confirmation">
    <h3>Thank You {firstName} for your willingness to be abducted!</h3>
    <h4>It's victims (er, volunteers), like yourself, that help us learn more about humans.</h4>

<div className="ticket-choices">
  <div className="item">
  <div>Order Date:</div>
  <div>{new Date().toLocaleDateString()}</div>
  </div>

  <div className="item">
  <div>Order Number:</div>
  <div>{Math.floor(Math.random() * 1000000)}</div>
  </div>

  <div className="item">
  <div>Abduction Day:</div>
  <div>{abductionDay}</div>
  </div>

  <div className="item">
  <div>Location Choice:</div>
  <div>{abductionLocation}</div>
  </div>

  <div>
  <div>Package Choice:</div>
  <div>{abductionPackage}</div>
  </div>
</div>

<br></br>
<h4>A confirmation has been sent to: {email} </h4>



    </section>

    </>
  )
}

export default TicketConfirmation