import './ticket_confirmation.css';
import React, {useState, createContext} from 'react'
import {CheckoutContext} from "./TicketContextProvider"
import Subheader from '../subheader/Subheader.jsx'

const TicketConfirmation = () => {

  let {firstName, lastName, phone, email, address, city, checkoutState, zipcode, setFirstName, setLastName, setPhone, setEmail, setAddress, setCity, setCheckoutState, setZipcode} = React.useContext(CheckoutContext);

  return (
    <>

<Subheader>Planning Your Abduction: </Subheader>



    <section id="ticket-confirmation">
    <h3>Thank You for your Purchase</h3>

    Hello, {firstName}
    <p>Your order has been confirmed.</p>
    <p>Your tickets have been emailed to: {email}</p>

    Order Date: {new Date().toLocaleDateString()} <br/>
    Order Number: {Math.floor(Math.random() * 1000000)} <br/>

    Number of Tickets Ordered: 2;
    Package Choice:



    Your Name: {firstName} {lastName} <br/>
    Phone Number: {phone} <br/>
    Email: {email} <br/>
    Address: {address} <br/>
    City: {city} <br/>
    Zipcode: {zipcode} <br/>
    State: {checkoutState} <br/>




    </section>

    </>
  )
}

export default TicketConfirmation