
import "./home.css";
import React from 'react';
import {Link} from "react-router-dom";
import Button from '../button/Button';
import Hero from '../hero/Hero';



import ufo from '../../assets/images/ufo.svg';
import standard_package from '../../assets/images/standard_package.png';
import vip_package from '../../assets/images/vip_package.png';
import testimonial1 from '../../assets/images/testimonial1.png';
import testimonial2 from '../../assets/images/testimonial2.png';
import testimonial3 from '../../assets/images/testimonial3.png';


const Home = () => {
  return (
    <>



<Hero/>


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
<Link to="/tickets">
<Button className="primary-button">Purchase Tickets</Button>
</Link>
</div>

</article>

<article>
<div><img src={vip_package} alt="placeholder"/></div>
<div>
<h3>VIP Abduction Package</h3>
<p>The VIP Abduction Package offers an unparalleled interstellar experience beyond your wildest dreams. As a privileged voyager, you'll be treated to exclusive encounters with our advanced extraterrestrial hosts, gaining insights into their culture and technology. But that's not all - you'll also have the unique opportunity to participate in groundbreaking scientific experiments</p>
</div>
<div>

<Link to="/tickets">
<Button className="primary-button">Purchase Tickets</Button>
</Link>

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
<h3>Alien Identification Game</h3>
<p>Can you correctly identify as many alien species as possible in just thirty seconds? Sharpen your intergalactic instincts and race against the clock to prove your mastery of the cosmos and become the ultimate Alien Species Identifier!</p>
</div>

<div className="call-to-action">
<Link to="/game">
<Button className="primary-button">Select</Button>
</Link>
</div>
</article>

<article>
<div>
<h3>Weather Checking Tool</h3>
<p>Plan your abduction with confidence by checking the weather on the day and location of your scheduled encounter. Stay informed and be ready to explore the cosmos, rain or shine!</p>
</div> 
<div className="call-to-action">         
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
<div className="call-to-action">
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
        <div className="card_picture"><img src={testimonial3} alt="Richard Anderson"/></div>
        <div className="card_body">
          <p className="card_text">"Nothing could have prepared me for this awe-inspiring experience. The Standard Abduction Package offered a genuine and authentic encounter with their alien hosts."</p>
         <cite title="Source Title">Richard Anderson, <br></br>Retired Aerospace Engineer</cite>
        </div>
  </article>

  <article className="card">
        <div className="card_picture"><img src={testimonial1} alt="Alex Johnson"/></div>
        <div className="card_body">
          <p className="card_text">"It was an unparalleled adventure that has ignited my creativity and expanded my understanding of the cosmos. UFO Adventures is a dream come true for any cosmic enthusiasts!"</p>
         <cite title="Source Title">Alex Johnson, <br></br>Science Fiction Writer</cite>
        </div>
  </article>

  <article className="card">
        <div className="card_picture"><img src={testimonial2} alt="Sarah Thompson"/></div>
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