import React, {useState, createContext} from 'react'
import {useFirstName, useLastName, usePhone, useEmail, useAddress, useCity, useCheckoutState, useZipcode } from "./TicketContextProvider";


const TicketConfirmation = () => {

  const firstName = useFirstName()
  const lastName = useLastName()
  const phone = usePhone()
  const email = useEmail()
  const address = useAddress()
  const city = useCity()
  const zipcode = useZipcode()
  const checkoutState = useCheckoutState()



  return (
    <>

    WOOT - got this far
{firstName}

    </>
  )
}

export default TicketConfirmation