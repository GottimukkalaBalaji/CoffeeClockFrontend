import React from 'react';
import './SignIn.css';
import coffeeclock from '../images/CoffeeLogo.png'
import coffee from '../images/Hero.png'
import AboutUs from './AboutUs';
import Contactus from './ContactUs';
import OurProduct from './OurProducts';
import BlogPost from './BlogPost';
import Footer from './Footer';
import Profile from './Profile';

const Sign = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>   

    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={coffeeclock} alt="CoffeeClock Logo" className="logo-image" />
          CoffeeClock
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Our Coffee</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">Contact Us</a>
        </nav>
      </header>
      <main className="hero">
        <div className="text-section">
          <h1>CoffeeClock</h1>
          <p className="description">
            CoffeeScript is a little language that compiles into JavaScript. Underneath that awkward Java-esque patina, JavaScript has always had a gorgeous heart.
          </p>
          <div className="buttons">
            <button className="button">Sign Up</button>
            <button className="button">Log In</button>
          </div>
        </div>
        <div className="image-section">
          <img src={coffee} alt="Coffee" className="hero-image"/>
        </div>
      </main>
    </div>

    <AboutUs />
    <OurProduct/>
    <Profile />
    <BlogPost/>
    <Contactus/> 
    <Footer/>
    </div >
 
  );
};

export default Sign;