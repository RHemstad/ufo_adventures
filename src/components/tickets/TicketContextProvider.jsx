import React, { useState, useContext } from "react";

const CheckoutContext = React.createContext();
const UpdateCheckoutContext = React.createContext();

export const CheckoutProvider = (value, children) => {

    const [firstName, setFirstName] = useState(value) ;
    const [lastName, setLastName] = useState(value) ;
    const [phone, setPhone] = useState(value) ;
    const [email, setEmail] = useState(value) ;
    const [address, setAddress] = useState(value) ;
    const [city, setCity] = useState(value) ;
    const [state, setState] = useState(value) ;
    const [zipcode, setZipcode] = useState(value) ;
    
  return (

<CheckoutContext.Provider value={[firstName, lastName, phone, email, address, city, state, zipcode]}>
      <UpdateCheckoutContext.Provider value={[setFirstName, setLastName, setPhone, setEmail, setAddress, setCity, setState, setZipcode]}>
        {/* grabs the children here in between the contexts, and above we take that value in and here have some internal state - see note above  */}
        {children}
      </UpdateCheckoutContext.Provider>
    </CheckoutContext.Provider>
  );
};


export const useCheckout = () => {
    return useContext(CheckoutContext);
  };

  export const useUpdateCheckout = () => {
    return useContext(UpdateCheckoutContext);
  };
  