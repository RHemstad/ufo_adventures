
import "./home.css";
import React from 'react';
import {Link} from "react-router-dom";
import Button from '../button/Button';


import ufo from '../../assets/images/ufo.svg';
import standard_package from '../../assets/images/standard_package.png';
import vip_package from '../../assets/images/vip_package.png';


const Home = () => {
  return (
    <>



{/* ****************************************** */} 
{/* **************** HERO  ******************* */} 
{/* ****************************************** */} 
<div id="animation">
<div id="ufo" className="x"><img className="y" src={ufo} alt="spaceship"/></div>
</div>

<section id="hero" className="hero">









    <article>
        <h5>ONE WEEKEND ONLY</h5>
        <h2>Your Unforgettable Alien Abduction Awaits!</h2>

        <p>Experience the ultimate adventure with UFO Adventures – an authentic Alien abduction awaits you! Choose from our Standard or VIP Abduction Packages and step into a world beyond imagination.</p>

        <Link to="/tickets">
        <Button className="primary-button">Join Today</Button>
        </Link>
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

<div className="tickets_content">
<article>
<div><img src={standard_package} alt="placeholder"/></div>
<div>
<h3>Standard Abduction Experience</h3>
<p>The Standard Abduction Experience promises an extraordinary cosmic adventure that will leave you in awe. Join our extraterrestrial guides as they whisk you away on a journey of discovery through the galaxies. Witness stunning interstellar landscapes. Immerse yourself in the wonders of their advanced technology. Enjoy a mesmerizing blend of adventure, curiosity, and exploration.</p>
</div>

<div>
<Button className="primary-button" to="/tickets">Purchase Tickets</Button>
</div>

</article>

<article>
<div><img src={vip_package} alt="placeholder"/></div>
<div>
<h3>VIP Abduction Package</h3>
<p>The VIP Abduction Package offers an unparalleled interstellar experience beyond your wildest dreams. As a privileged voyager, you'll be treated to exclusive encounters with our advanced extraterrestrial hosts, gaining insights into their culture and technology. But that's not all - you'll also have the unique opportunity to participate in groundbreaking scientific experiments</p>
</div>
<div>
<Button className="primary-button" to="/tickets">Purchase Tickets</Button>
</div>
</article>

</div>
</section>


{/* ************************************************************* */} 
{/* **************** PLANNING YOUR ABDUCTION  ******************* */} 
{/* ************************************************************* */} 

<section id="pya" className="pya">

<div className="subheading">
  <h2>Planning Your Abduction</h2>
  <p>Ready to embark on an out-of-this-world journey? Start planning your abduction today and don't let any detail slip away - be fully equipped for your cosmic encounter! </p>
</div>

<div className="pya_content">

<article>
<div>
<h3>Learn To Recognize UFOs</h3>
<p>Can you spot the real UfOs from the fakes? Take on the UFO identity challenge and prove your mastery of the skies!  Sharpen your UFO-spotting abilities and become a certified extraterrestrial investigator!</p>
</div>

<div>
<Button className="primary-button">Select</Button>
</div>
</article>

<article>
<div>
<h3>Weather Checking Tool</h3>
<p>Plan your abduction with confidence by checking the weather on the day and location of your scheduled encounter. Stay informed and be ready to explore the cosmos, rain or shine!</p>
</div> 
<div>         
            <Link to="/weather">
              <Button className="primary-button">Select</Button>
            </Link>
</div>
</article>

<article>
  <div>
<h3>Packing Checklist</h3>
<p>From space-age essentials to cosmic curiosities, we've got you covered. Get ready for the journey of a lifetime – check off your packing list now and gear up for an out-of-this-world experience!</p>
</div>
<div>
<Link to="/packingchecklist">
        <Button className="primary-button">Select</Button>
        </Link>

</div>

</article>

</div>


</section>

{/* ************************************************************* */} 
{/* **************** TESTIMONIALS  ****************************** */} 
{/* ************************************************************* */} 

<section id="testimonials" className="testimonials">

<div className="subheading">
  <h2>Testimonials</h2>
</div>


<div className="testimonials_content">
  <article className="card">
        <div className="card_picture">picture</div>
        <div className="card_body">
          <p className="card_text">"Nothing could have prepared me for this awe-inspiring experience. The Standard Abduction Package offered a genuine and authentic encounter with their friendly alien hosts."</p>
         <cite title="Source Title">Richard Anderson, <br></br>Retired Aerospace Engineer</cite>
        </div>
  </article>

  <article className="card">
        <div className="card_picture">picture</div>
        <div className="card_body">
          <p className="card_text">"It was an unparalleled adventure that has ignited my creativity and expanded my understanding of the cosmos. UFO Adventures is a dream come true for any cosmic enthusiasts!"</p>
         <cite title="Source Title">Alex Johnson, <br></br>Science Fiction Writer</cite>
        </div>
  </article>

  <article className="card">
        <div className="card_picture">picture</div>
        <div className="card_body">
          <p className="card_text">"I was a skeptic at first, but, it was a mind-blowing experience that I will cherish forever. UFO Adventures truly offers an unforgettable journey to the stars!"</p>
         <cite title="Source Title">Sarah Thompson, <br></br>Astrophysics Enthusiast</cite>
        </div>
  </article>

  </div>







</section>


    </>
  )
}

export default Home