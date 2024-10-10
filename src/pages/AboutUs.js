import React from 'react';
import './AboutUs.css';
import coffeeImage from '../images/CoffeShop.png'; // Update with the correct image path
// import ContactUs from './ContactUs';

const AboutUs = () => {
  return (
    <>
    <div className="about-us">
      <div className="text-section">
        <h1>About us</h1>
        <p>Lorem Ipsum Generator, with two clicks generates random text in Figma.</p>
        <p>Lorem Ipsum Generator, with two clicks generates random text in Figma. You can set the count of sentences and after that customize it as a normal text in Figma.</p>
        <button>Read More</button>
      </div>
      <div className="image-section">
        <img src={coffeeImage} alt="Coffee" />
      </div>
    </div>
    {/* <ContactUs /> */}
    </>
  );
};

export default AboutUs;