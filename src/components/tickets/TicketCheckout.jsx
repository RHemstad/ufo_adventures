
import './ticket_checkout.css';
import React, {useState} from 'react';
import Subheader from '../subheader/Subheader.jsx';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import * as yup from 'yup' // importing functions from yup library

import { useUpdateFirstName, useUpdateLastName, useUpdatePhone, useUpdateEmail, useUpdateAddress, useUpdateCity, useUpdateState, useUpdateZipcode } from "./TicketContextProvider";
import { useFirstName, useLastName, usePhone, useEmail, useAddress, useCity, useState, useZipcode } from "./TicketContextProvider";


const TicketCheckout = () => {

const navigate = useNavigate();

const updateFirstName = useUpdateFirstName();
const firstName = useFirstName();
let [newFirstName, setNewFirstName] = useState(firstName) ;

const updateLastName = useUpdateLastName();
const lastName = useLastName();
let [newLastName, setNewLastName] = useState(lastName) ;

const updatePhone = useUpdatePhone();
const phone = usePhone();
let [newPhone, setNewPhone] = useState(phone) ;

const updateEmail = useUpdateEmail();
const email = useEmail();
let [newEmail, setNewEmail] = useState(email) ;

const updateAddress = useUpdateAddress();
const address = useAddress();
let [newAddress, setNewAddress] = useState(address) ;

const updateCity = useUpdateCity();
const city = useCity();
let [newCity, setNewCity] = useState(city) ;

const updateState = useUpdateState();
const state = useState();
let [newState, setNewState] = useState(state) ;

const updateZipcode = useUpdateZipcode();
const zipcode = useZipcode();
let [newZipcode, setNewZipcode] = useState(zipcode) ;


  const onUpdateCheckout = (e) => {
    e.preventDefault();
    updateFirstName(newFirstName);
    updateLastName(newLastName);
    updatePhone(newPhone);
    updateEmail(newEmail);
    updateAddress(newAddress);
    updateCity(newCity);
    updateState(newState);
    updateZipcode(newZipcode);

    navigate('/')

  };

  return (
    <>
    
        
<Subheader>Purchase Tickets: </Subheader>
    
    <form id="ticket-form" className="checkout">
        <fieldset>

        <h4>Billing Information</h4>

            {/* ****************************** */}
            {/* ************ NAME ************ */}
            {/* ****************************** */}
            <div className="input-container">

            {/* ***** FIRST NAME ***** */}

                <div className="input-area">
                    <label> First Name <span aria-label="required">*</span></label>
                    <input type="text" name="firstName" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} className="form-control" required />

                </div>


                {/* ***** LAST NAME ***** */}

            <div className="input-area">
                    <label> Last Name <span aria-label="required">*</span></label>
                    <input type="text" name="lastname" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} className="form-control" required />

                </div>

            </div>


            {/* ****************************** */}
            {/* ************ PHONE AND EMAIL ************ */}
            {/* ****************************** */}
            <div className="input-container">

            {/* ***** PHONE NUMBER ***** */}
                <div className="input-area">
                    <label>Phone Number <span aria-label="required">*</span></label>
                    <input type="number" name="phone" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} className="form-control" required />

                </div>

                {/* ***** EMAIL ADDRESS ***** */}

                <div className="input-area">
                    <label>Email Address <span aria-label="required">*</span></label>
                    <input type="email" name="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} className="form-control" required />
                </div>


            </div>

            {/* ****************************** */}
            {/* ************ STREET ************ */}
            {/* ****************************** */}
            <div className="input-container">

                {/* ***** FULL ADDRESS ***** */}

                <div className="input-area grow">
                    <label>Street Address <span aria-label="required">*</span></label>
                    <input name="address" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} className="form-control" required></input>

                </div>

            </div>

            {/* ****************************** */}
            {/* ************ CITY STATE ZIPCODE ************ */}
            {/* ****************************** */}
            <div className="input-container">

                {/* ***** CITY ***** */}
                <div className="input-area">
                    <label>City <span aria-label="required">*</span></label>
                    <input type="text" name="city" value={newCity} onChange={(e) => setNewCity(e.target.value)} className="form-control" required />
    
                </div>


                {/* ***** STATE ***** */}

                <div className="input-area">
                    <label>State <span aria-label="required">*</span></label>
                    <input type="text" name="state" value={newState} onChange={(e) => setNewState(e.target.value)} className="form-control" required />

                </div>


                {/* ***** ZIP CODE ***** */}

                <div className="input-area">
                    <label>Zip Code <span aria-label="required">*</span></label>
                    <input type="text" name="zipcode" value={newZipcode} onChange={(e) => setNewZipcode(e.target.value)} className="form-control" required />

                </div>


            </div>


            </fieldset>

                             {/* ***** PAYMENT TYPE ***** */}
                                <div className="payment-type"> 
                                    {/*<button type="button" className="primary-button" onClick={() => {validateForm()}}>Place Order</button>*/}
                                    <button type="button" className="primary-button" onClick={onUpdateCheckout}>Place Order</button>
                                </div>


    </form> 
        



        

        
        
        </>
  )
}

export default TicketCheckout