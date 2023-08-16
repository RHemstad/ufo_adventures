
import './ticket_checkout.css';
import React, {useState} from 'react';
import Subheader from '../subheader/Subheader.jsx';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup' // importing functions from yup library for form validation todo
import {CheckoutContext} from "./TicketContextProvider"


const TicketCheckout = () => {


    const navigate = useNavigate();

    let {abductionDay, abductionLocation, abductionPackage, standardPackage, vipPackage, firstName, lastName, phone, email, address, city, checkoutState, zipcode, 
        setAbductionDay, setAbductionLocation, setAbductionPackage, setStandardPackage, setVipPackage, setFirstName, setLastName, setPhone, setEmail, setAddress, setCity, setCheckoutState, setZipcode} = React.useContext(CheckoutContext);

    let [newAbductionDay, setNewAbductionDay] = useState(abductionDay);
    let [newAbductionLocation, setNewAbductionLocation] = useState(abductionLocation);
    let [newAbductionPackage, setNewAbductionPackage] = useState(abductionPackage);
    let [newStandardPackage, setNewStandardPackage] = useState(standardPackage);
    let [newVipPackage, setNewVipPackage] = useState(vipPackage);
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
    newAbductionDay: yup.string().required("Abduction Day is required"),
    newAbductionLocation: yup.string().required("Abduction Location is required"),
    //newAbductionPackage: yup.string().required("Abduction Package is required"),
    //newStandardPackage: yup.string().required("Abduction Package is required"),
    //newVipPackage: yup.string().required("Abduction Package is required"),
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

    let dataObject = {
    newAbductionDay: newAbductionDay,
    newAbductionLocation: newAbductionLocation,
    newAbductionPackage: newAbductionPackage,
    newStandardPackage: newStandardPackage,
    newVipPackage: newVipPackage,
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

    setAbductionDay(newAbductionDay);
    setAbductionLocation(newAbductionLocation);
    setAbductionPackage(newAbductionPackage);
    setStandardPackage(newStandardPackage);
    setVipPackage(newVipPackage);
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
<h3>Only one ticket per person.</h3>
    
<form id="ticket-form" className="checkout">



    {/* ************************************************** */}
    {/* ************SELECT YOUR ABDUCTION DAY ************ */}
    {/* ************************************************** */}

    <fieldset>
        <h4>Select Your Abduction Day</h4>
        <div className="input-container">
        <select className="select" value={newAbductionDay} onChange={(e) => setNewAbductionDay(e.target.value)} >
        <option value="">--Please choose an abduction day--</option>
        <option value="Saturday, November 3, 2023">Saturday, November 3, 2023</option>
        <option value="Sunday, November 4, 2023">Sunday,  November 4, 2023</option>
        </select>
        </div>
    </fieldset>


    {/* ****************************************************** */}
    {/* *********** SELECT YOUR ABDUCTION LOCATION *********** */}
    {/* ****************************************************** */}

    <fieldset>
    <h4>Select Your Abduction Location</h4>
    <div className="input-container">
    <select className="select" value={newAbductionLocation} onChange={(e) => setNewAbductionLocation(e.target.value)}>
    <option value="">--Please choose an abduction location--</option>
    <option value="Dallas, TX">Dallas, TX</option>
    <option value="Los Angeles, CA">Los Angeles, CA</option>
    <option value="Vancouver, WA">Vancouver, WA</option>
    <option value="Washington, DC">Washington, DC</option>
    <option value="Albuquerque, NM">Albuquerque, NM</option>
    <option value="The Uintah Basin">The Uintah Basin</option>
    </select>
    </div>
    </fieldset>


    {/* ****************************************************** */}
    {/* ************SELECT YOUR ABDUCTION PACKAGE ************ */}
    {/* ****************************************************** */}

    <fieldset className="package-choice">
    <h4>Select Your Abduction Package</h4>
    <div className="input-container">
    <select className="select" value={newAbductionPackage} onChange={(e) => setNewAbductionPackage(e.target.value)}>
    <option value="">--Please choose an abduction package--</option>
    <option value="Standard Abduction Package">Standard Abduction Package</option>
    <option value="Vip Abduction Package">Vip Abduction Package</option>

    </select>
    </div>
    </fieldset>

   

    {/* ****************************************************** */}
    {/* ************ PERSONAL DETAILS ************************ */}
    {/* ****************************************************** */}


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
            <button type="button" className="primary-button" onClick={() => {validateForm()}}>Place Ticket Order</button>
            {/*<button type="submit" className="primary-button" onClick={onUpdateCheckout}>Submit</button>*/}
            </div>


    </form> 
        



    </section>   

        
        
        </>
  )
}

export default TicketCheckout