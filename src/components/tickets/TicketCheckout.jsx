
import './ticket_checkout.css';
import React, {useState} from 'react';
import Subheader from '../subheader/Subheader.jsx';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup' // importing functions from yup library for form validation todo
import {CheckoutContext} from "./TicketContextProvider"
import { useForm } from 'react-hook-form'

const TicketCheckout = () => {

    const navigate = useNavigate();

    let {firstName, lastName, phone, email, address, city, checkoutState, zipcode, setFirstName, setLastName, setPhone, setEmail, setAddress, setCity, setCheckoutState, setZipcode} = React.useContext(CheckoutContext);

    let [newFirstName, setNewFirstName] = useState(firstName);
    let [newLastName, setNewLastName] = useState(lastName);
    let [newPhone, setNewPhone] = useState(phone);
    let [newEmail, setNewEmail] = useState(email);
    let [newAddress, setNewAddress] = useState(address);
    let [newCity, setNewCity] = useState(city);
    let [newCheckoutState, setNewCheckoutState] = useState(checkoutState);
    let [newZipcode, setNewZipcode] = useState(zipcode);


// defining yup schema to validate our form

  const userSchema = yup.object().shape({
    newFirstName: yup.string().required("First Name is required"),
    newLastName: yup.string().required("Last Name is required"),
    newEmail: yup.string().email().required("Email is required"),
    newPhone: yup.number().required("Phone Number is required and it must be numbers only."),
    newAddress: yup.string().required("Address is required"),
    newCity: yup.string().required("City is required"),
    newCheckoutState: yup.string().required("State is required"),
    newZipcode: yup.string().required("Zipcode is required"),
  })


//******** VALIDATE FORM FUNCTION ************ */
async function validateForm() {
    // creating a form data object

    let dataObject = {
    newFirstName: newFirstName,
    newLastName: newLastName,
    newEmail: newEmail,
    newPhone: newPhone,
    newAddress: newAddress,
    newCity: newCity,
    newCheckoutState: newCheckoutState,
    newZipcode: newZipcode
    }
    // validating this dataObject concerning Yup userSchema
    const isValid = await userSchema.isValid(dataObject);


    if (isValid) {
     // alert('Form is Valid');
      onUpdateCheckout();
    } else {
        /* TODO: display error messages to user under the input  */
        userSchema.validate(dataObject, { abortEarly: false }).catch(function(errors) {
            errors.inner.forEach(error => {
            //console.log(error.path, error.name, error.errors)
            //alert(`Form is Invalid and my TODO is to show the errors under the field. ${error.errors}`)
            //return errors;
            })
        });

       alert('Sorry, this Form is NOT Valid. Please check the fields and try again.');
    }
  }


//******** ONUPDATE CHECKOUT FUNCTION ************ */

  const onUpdateCheckout = (e) => {
    //e.preventDefault();


    setFirstName(newFirstName);
    setLastName(newLastName);
    setPhone(newPhone);
    setEmail(newEmail);
    setAddress(newAddress);
    setCity(newCity);
    setCheckoutState(newCheckoutState);
    setZipcode(newZipcode);

    navigate('/ticketconfirmation')

  };

  return (
    <>
    
        
<Subheader>Get Tickets: </Subheader>

<section className="ticket-checkout">
<h4>Only one ticket per person.</h4>
    
<form id="ticket-form" className="checkout">
 
<fieldset>
<h4>Select Your Abduction Day</h4>
 <select class="select">
 <option value="">--Please choose an abduction day--</option>
  <option value="sat">Saturday, November 3, 2023</option>
  <option value="sun">Sunday,  November 4, 2023</option>
</select>
</fieldset>

<fieldset>
<h4>Select Your Abduction Location</h4>
 <select class="select">
 <option value="">--Please choose an abduction location--</option>
  <option value="1">Dallas, TX</option>
  <option value="2">Los Angeles, CA</option>
  <option value="3">Vancouver, WA</option>
  <option value="4">Washington, DC</option>
  <option value="5">Albuquerque, NM</option>
  <option value="6">The Uintah Basin</option>
</select>
</fieldset>


<fieldset className="package-choice">
<h4>Select Your Abduction Package</h4>
<div>
<label class="form-control">
    <input type="radio" id="radio" name="radio" />
    Standard Package
  </label>

  <label class="form-control">
    <input type="radio" id="radio" name="radio" checked />
    Vip Package
  </label>
  </div>
</fieldset>


<fieldset>
        <h4>Your Details</h4>

            {/* ****************************** */}
            {/* ************ NAME ************ */}
            {/* ****************************** */}
            <div className="input-container">

            {/* ***** FIRST NAME ***** */}

                <div className="input-area">
                    <label> First Name <span aria-label="required">*</span></label>
                    <input 
                    required 
                    name="newFirstName"
                    type="text" 
                    value={newFirstName} 
                    onChange={(e) => setNewFirstName(e.target.value)} 
                    className="form-control" 
                    />
                </div>


                {/* ***** LAST NAME ***** */}

            <div className="input-area">
                    <label> Last Name <span aria-label="required">*</span></label>
                    <input 
                    type="text" 
                    value={newLastName} 
                    onChange={(e) => setNewLastName(e.target.value)} 
                    className="form-control" 
                    required />

                </div>

            </div>


            {/* ****************************** */}
            {/* ************ PHONE AND EMAIL ************ */}
            {/* ****************************** */}
            <div className="input-container">

            {/* ***** PHONE NUMBER ***** */}
                <div className="input-area">
                    <label>Phone Number <span aria-label="required">*</span></label>
                    <input 
                    type="number" 
                    value={newPhone} 
                    onChange={(e) => setNewPhone(e.target.value)} 
                    className="form-control" 
                    required 
                    />

                </div>

                {/* ***** EMAIL ADDRESS ***** */}

                <div className="input-area">
                    <label>Email Address <span aria-label="required">*</span></label>
                    <input 
                    type="email" 
                    value={newEmail} 
                    onChange={(e) => setNewEmail(e.target.value)} 
                    className="form-control" 
                    required 
                    />

                </div>


            </div>

            {/* ****************************** */}
            {/* ************ STREET ************ */}
            {/* ****************************** */}
            <div className="input-container">

                {/* ***** FULL ADDRESS ***** */}

                <div className="input-area grow">
                    <label>Street Address <span aria-label="required">*</span></label>
                    <input 
                    type="text"
                    value={newAddress} 
                    onChange={(e) => setNewAddress(e.target.value)} 
                    className="form-control" 
                    required
                    />

                </div>

            </div>

            {/* ****************************** */}
            {/* ************ CITY STATE ZIPCODE ************ */}
            {/* ****************************** */}
            <div className="input-container">

                {/* ***** CITY ***** */}
                <div className="input-area">
                    <label>City <span aria-label="required">*</span></label>
                    <input 
                    type="text" 
                    value={newCity} 
                    onChange={(e) => setNewCity(e.target.value)} 
                    className="form-control" 
                    required 
                    />
    
                </div>


                {/* ***** STATE ***** */}

                <div className="input-area">
                    <label>State <span aria-label="required">*</span></label>
                    <input 
                    type="text" 
                    value={newCheckoutState} 
                    onChange={(e) => setNewCheckoutState(e.target.value)} 
                    className="form-control" 
                    required 
                    />

                </div>


                {/* ***** ZIP CODE ***** */}

                <div className="input-area">
                    <label>Zip Code <span aria-label="required">*</span></label>
                    <input 
                    type="text" 
                    value={newZipcode} 
                    onChange={(e) => setNewZipcode(e.target.value)} 
                    className="form-control" required 
                    />

                </div>


            </div>



</fieldset>
            {/* ***** PAYMENT TYPE ***** */}
            <div className="payment-type"> 
            <button type="button" className="primary-button" onClick={() => {validateForm()}}>Place Order</button>
            {/*<button type="submit" className="primary-button" onClick={onUpdateCheckout}>Submit</button>*/}
            </div>


    </form> 
        



    </section>   

        
        
        </>
  )
}

export default TicketCheckout