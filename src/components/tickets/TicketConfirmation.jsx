import React, {useState, createContext} from 'react'
import {useFirstName, useLastName, usePhone, useEmail, useAddress, useCity, useCheckoutState, useZipcode } from "./TicketContextProvider";


const TicketConfirmation = () => {

  const firstName = useFirstName();
  const lastName = useLastName();
  const phone = usePhone();
  const email = useEmail();
  const address = useAddress();
  const city = useCity();
  const checkoutState = useCheckoutState();
  const zipcode = useZipcode();




  return (
    <>

    WOOT - got this far
{TicketConfirmation.firstName}

    </>
  )
}

export default TicketConfirmation