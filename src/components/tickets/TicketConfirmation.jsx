import React, {useState, createContext} from 'react'
import {CheckoutContext} from "./TicketContextProvider"

const TicketConfirmation = () => {

  let {firstName, lastName, phone, email, address, city, checkoutState, zipcode, setFirstName, setLastName, setPhone, setEmail, setAddress, setCity, setCheckoutState, setZipcode} = React.useContext(CheckoutContext);

  return (
    <>

    WOOT - got this far

    {firstName}



    </>
  )
}

export default TicketConfirmation