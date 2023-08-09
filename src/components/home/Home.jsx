
import "./home.css";
import React from 'react';
import { Link} from "react-router-dom";

import placeholder from '../../assets/images/600x400.svg';

const Home = () => {
  return (
    <>


{/* ****************************************** */} 
{/* **************** HERO  ******************* */} 
{/* ****************************************** */} 

<section id="hero" className="hero">
    <article>
        <h5>ONE WEEKEND ONLY</h5>
        <h2>Your Unforgettable Alien Abduction Awaits!</h2>

        <p>Experience the ultimate adventure with UFO Adventures – an authentic Alien abduction awaits you! Choose from our Standard or VIP Abduction Packages and step into a world beyond imagination.</p>

        <button>Join Today</button>
    </article>


</section>



{/* ****************************************** */} 
{/* **************** TICKETS  ******************* */} 
{/* ****************************************** */} 

<section id="tickets" className="tickets">

<div className="subheading">
  <h5>SUPPLIES LIMITED</h5>
  <h2>Tickets</h2>
</div>

<div>
<article>
<div><img src={placeholder} alt="placeholder"/></div>
<h3>Standard Abduction Experience</h3>
<p>The Standard Abduction Experience promises an extraordinary cosmic adventure that will leave you in awe. Join our extraterrestrial guides as they whisk you away on a journey of discovery through the galaxies. Witness stunning interstellar landscapes. Immerse yourself in the wonders of their advanced technology. Enjoy a mesmerizing blend of adventure, curiosity, and exploration.</p>

<button>Purchase Tickets</button>
</article>

<article>
<div><img src={placeholder} alt="placeholder"/></div>
<h3>VIP Abduction Package</h3>
<p>The VIP Abduction Package offers an unparalleled interstellar experience beyond your wildest dreams. As a privileged voyager, you'll be treated to exclusive encounters with our advanced extraterrestrial hosts, gaining insights into their culture and technology. But that's not all - you'll also have the unique opportunity to participate in groundbreaking scientific experiments</p>
<button>Purchase Tickets</button>
</article>

</div>
</section>


{/* ************************************************************* */} 
{/* **************** PLANNING YOUR ABDUCTION  ******************* */} 
{/* ************************************************************* */} 

<section id="pya" className="pya">

<div className="subheading">
  <h5></h5>
  <h2>Planning Your Abduction</h2>
  <p>Ready to embark on an out-of-this-world journey? Start planning your abduction today and don't let any detail slip away - be fully equipped for your cosmic encounter! </p>
</div>

<div>
<article>
<h3>Learn To Recognize UFOs</h3>
<p>Can you spot the real UfOs from the fakes? Take on the UFO identity challenge and prove your mastery of the skies!  Sharpen your UFO-spotting abilities and become a certified extraterrestrial investigator!</p>
<button>Select</button>
</article>

<article>
<h3>Weather Checking Tool</h3>
<p>Plan your abduction with confidence by checking the weather on the day and location of your scheduled encounter. Stay informed and be ready to explore the cosmos, rain or shine!</p>
<button>Select</button>
</article>

<article>
<h3>Packing Checklist</h3>
<p>From space-age essentials to cosmic curiosities, we've got you covered. Get ready for the journey of a lifetime – check off your packing list now and gear up for an out-of-this-world experience!</p>
<button>Select</button>
</article>

</div>


</section>

{/* ************************************************************* */} 
{/* **************** TESTIMONIALS  ****************************** */} 
{/* ************************************************************* */} 

<section id="testimonials" className="testimonials">

<div className="subheading">
  <h5></h5>
  <h2>Testimonials</h2>
</div>


<div>
  <article className="card">
        <div className="card_picture">picture</div>
        <div className="card_body">
          <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus</p>
         <cite title="Source Title">Mohamed Nady</cite>
        </div>
  </article>

  <article className="card">
        <div className="card_picture">picture</div>
        <div className="card_body">
          <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus</p>
         <cite title="Source Title">Mohamed Nady</cite>
        </div>
  </article>

  <article className="card">
        <div className="card_picture">picture</div>
        <div className="card_body">
          <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus</p>
         <cite title="Source Title">Mohamed Nady</cite>
        </div>
  </article>

  </div>







</section>














    
    
    </>
  )
}

export default Home