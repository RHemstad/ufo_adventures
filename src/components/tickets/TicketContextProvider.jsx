import React, { useState, useContext } from "react";

const CheckoutContext = React.createContext();
const UpdateCheckoutContext = React.createContext();

export const CheckoutProvider = ({value, children}) => {

    const [firstName, setFirstName] = useState(value);
    const [lastName, setLastName] = useState(value);
    const [phone, setPhone] = useState(value);
    const [email, setEmail] = useState(value);
    const [address, setAddress] = useState(value);
    const [city, setCity] = useState(value);
    const [checkoutState, setCheckoutState] = useState(value);
    const [zipcode, setZipcode] = useState(value);
    
  return (

<CheckoutContext.Provider value={firstName, lastName, phone, email, address, city, checkoutState, zipcode}>
      <UpdateCheckoutContext.Provider value={setFirstName, setLastName, setPhone, setEmail, setAddress, setCity, setCheckoutState, setZipcode}>
        {children}
      </UpdateCheckoutContext.Provider>
</CheckoutContext.Provider>
  );
};




export const useFirstName = () => {
  return useContext(CheckoutContext);
};

export const useUpdateFirstName = () => {
  return useContext(UpdateCheckoutContext);
};


export const useLastName = () => {
  return useContext(CheckoutContext);
};

export const useUpdateLastName = () => {
  return useContext(UpdateCheckoutContext);
};


export const usePhone = () => {
  return useContext(CheckoutContext);
};

export const useUpdatePhone = () => {
  return useContext(UpdateCheckoutContext);
};


export const useEmail = () => {
  return useContext(CheckoutContext);
};

export const useUpdateEmail = () => {
  return useContext(UpdateCheckoutContext);
};


export const useAddress = () => {
  return useContext(CheckoutContext);
};

export const useUpdateAddress = () => {
  return useContext(UpdateCheckoutContext);
};



export const useCity = () => {
  return useContext(CheckoutContext);
};

export const useUpdateCity = () => {
  return useContext(UpdateCheckoutContext);
};


export const useCheckoutState = () => {
  return useContext(CheckoutContext);
};

export const useUpdateCheckoutState = () => {
  return useContext(UpdateCheckoutContext);
};


export const useZipcode = () => {
  return useContext(CheckoutContext);
};

export const useUpdateZipcode = () => {
  return useContext(UpdateCheckoutContext);
};







