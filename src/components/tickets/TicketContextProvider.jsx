import React, { useState, useContext } from "react";

export const CheckoutContext = React.createContext();
export const UpdateCheckoutContext = React.createContext();

export const CheckoutProvider = ({value, children}) => {
    const [abductionDay, setAbductionDay] = useState(value);
    const [abductionLocation, setAbductionLocation] = useState(value);
    const [abductionPackage, setAbductionPackage] = useState(value);
    const [standardPackage, setStandardPackage] = useState(value);
    const [vipPackage, setVipPackage] = useState(value);
    const [firstName, setFirstName] = useState(value);
    const [lastName, setLastName] = useState(value);
    const [phone, setPhone] = useState(value);
    const [email, setEmail] = useState(value);
    const [address, setAddress] = useState(value);
    const [city, setCity] = useState(value);
    const [checkoutState, setCheckoutState] = useState(value);
    const [zipcode, setZipcode] = useState(value);
    
  return (

<CheckoutContext.Provider value={{abductionDay, abductionLocation, abductionPackage, standardPackage, vipPackage, firstName, lastName, phone, email, address, city, checkoutState, zipcode, setAbductionDay, setAbductionLocation, setAbductionPackage, setStandardPackage, setVipPackage, setFirstName, setLastName, setPhone, setEmail, setAddress, setCity, setCheckoutState, setZipcode}}>
        {children}
</CheckoutContext.Provider>
  );
};


export const useAbductionDay = () => {
  return useContext(CheckoutContext);
};

export const useUpdateAbductionDay = () => {
  return useContext(UpdateCheckoutContext);
};

export const useAbductionLocation = () => {
  return useContext(CheckoutContext);
};

export const useUpdateAbductionLocation = () => {
  return useContext(UpdateCheckoutContext);
};

export const useAbductionPackage = () => {
  return useContext(CheckoutContext);
};

export const useUpdateAbductionPackage = () => {
  return useContext(UpdateCheckoutContext);
};

export const useStandardPackage = () => {
  return useContext(CheckoutContext);
};

export const useUpdateStandardPackage = () => {
  return useContext(UpdateCheckoutContext);
};

export const useVipPackage = () => {
  return useContext(CheckoutContext);
};

export const useVipStandardPackage = () => {
  return useContext(UpdateCheckoutContext);
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







