import './ticket_checkout.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Subheader from '../subheader/Subheader.jsx';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";


const TicketCheckout = () => {

    const navigate = useNavigate();
    const form = document.getElementById('form');

    const [checkoutInput, setCheckoutInput] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    });

    const [error, setError] = useState([]);

    const handleInput = (e) => {
        e.persist();
        setCheckoutInput({...checkoutInput, [e.target.firstname]: e.target.value });
        console.log("made it to handleInput");
    }

    //form.addEventListener('submit', async (e) => {
    const submitOrder = (e) => {
        e.preventDefault();
        console.log("made it to submit order");

        //const formData = new FormData(form);

        let data = {
            firstname: checkoutInput.firstname,
            lastname: checkoutInput.lastname,
            phone: checkoutInput.phone,
            email: checkoutInput.email,
            address: checkoutInput.address,
            city: checkoutInput.city,
            state: checkoutInput.state,
            zipcode: checkoutInput.zipcode
        }

        axios.post('https://httpbin.org/post', data)
        //.then(res => console.log(res))
        //.catch(err => console.log(err));

        .then(res=> {
            console.log(res);
            //set up form validation of some kind to handle empty form submission etc
                 setError(res.data.errors);
                 //alert('All fields are mandatory');
                navigate('/ticketconfirmation');

        })
        .catch(err => console.log(`HOUSTON WE HAVE A PROBLEM WITH THE FORM ${err}`));

    
        //set up form validation error handling
        console.log('got here');
    };


  return (
    <>
    
    <Subheader>Purchase Tickets: </Subheader>
    
    <form id="form" className="checkout">
        <fieldset>

        <h4>Billing Information</h4>

            {/* ****************************** */}
            {/* ************ NAME ************ */}
            {/* ****************************** */}
            <div className="input-container">

            {/* ***** FIRST NAME ***** */}

                <div className="input-area">
                    <label> First Name <span aria-label="required">*</span></label>
                    <input type="text" name="firstname" onChange={handleInput} value={checkoutInput.firstname} className="form-control" required />
                    <small className="text-danger">{error.firstname}</small>
                </div>


                {/* ***** LAST NAME ***** */}

            <div className="input-area">
                    <label> Last Name <span aria-label="required">*</span></label>
                    <input type="text" name="lastname" onChange={handleInput} value={checkoutInput.lastname} className="form-control" required />
                    <small className="text-danger">{error.lastname}</small>
                </div>

            </div>


            {/* ****************************** */}
            {/* ************ PHONE AND EMAIL ************ */}
            {/* ****************************** */}
            <div className="input-container">

            {/* ***** PHONE NUMBER ***** */}
                <div className="input-area">
                    <label> Phone Number <span aria-label="required">*</span></label>
                    <input type="number" name="phone" onChange={handleInput} value={checkoutInput.phone} className="form-control" required />
                    <small className="text-danger">{error.phone}</small>
                </div>

                {/* ***** EMAIL ADDRESS ***** */}

                <div className="input-area">
                    <label> Email Address <span aria-label="required">*</span></label>
                    <input type="email" name="email" onChange={handleInput} value={checkoutInput.email} className="form-control" required />
                    <small className="text-danger">{error.email}</small>
                </div>


            </div>

            {/* ****************************** */}
            {/* ************ STREET ************ */}
            {/* ****************************** */}
            <div className="input-container">

                {/* ***** FULL ADDRESS ***** */}

                <div className="input-area grow">
                    <label>Street Address <span aria-label="required">*</span></label>
                    <input name="address" onChange={handleInput} value={checkoutInput.address} className="form-control" required></input>
                    <small className="text-danger">{error.address}</small>
                </div>

            </div>

            {/* ****************************** */}
            {/* ************ CITY STATE ZIPCODE ************ */}
            {/* ****************************** */}
            <div className="input-container">

                {/* ***** CITY ***** */}
                <div className="input-area">
                    <label>City <span aria-label="required">*</span></label>
                    <input type="text" name="city" onChange={handleInput} value={checkoutInput.city} className="form-control" required />
                    <small className="text-danger">{error.city}</small>
                </div>


                {/* ***** STATE ***** */}

                <div className="input-area">
                    <label>State <span aria-label="required">*</span></label>
                    <input type="text" name="state" onChange={handleInput} value={checkoutInput.state} className="form-control" required />
                    <small className="text-danger">{error.state}</small>
                </div>


                {/* ***** ZIP CODE ***** */}

                <div className="input-area">
                    <label>Zip Code <span aria-label="required">*</span></label>
                    <input type="text" name="zipcode" onChange={handleInput} value={checkoutInput.zipcode} className="form-control" required />
                    <small className="text-danger">{error.zipcode}</small>
                </div>


            </div>


            </fieldset>

                             {/* ***** PAYMENT TYPE ***** */}
                                <div className="payment-type"> 
                                    <button type="button" className="primary-button" onClick={submitOrder}>Place Order</button>
                                </div>


    </form>



    
    
    
    
    
    </>
  )
}

export default TicketCheckout