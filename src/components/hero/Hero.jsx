import React from 'react'
import {Link} from "react-router-dom";
import Button from '../button/Button';
import ufo from '../../assets/images/ufo.svg';
import './hero.css';

const Hero = () => {
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

{/*
        <Link to="/tickets">
        <Button className="primary-button">Join Today</Button>
        </Link>
  */}

    </article>
    <a href="#tickets" className="arrow"><span className="sr-only">Scroll to Continue</span><span className="arrows"></span></a>



</section>

        
        
        
        
        
        </>
  )
}

export default Hero