import React from 'react';
import './Footer.css';
import footer from "../images/footer.png"
import facebook from "../images/facebook.png"
import google from "../images/google.jpg"
import instagram from "../images/insagram.png"
import pintrest from "../images/pintrest.jpg"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={footer } alt="CoffeeClock Logo" className="logo" />
        <p>CoffeeClock</p>
      </div>
      <div className="footer-center">
        <p>Copyright © 2022 CoffeeClock. All Rights Reserved</p>
      </div>
      <div className="footer-right">
        <p>Follow us on</p>
        <div className="social-icons">
          <img src={facebook} alt="Facebook" />
          <img src={google} alt="Google+" />
          <img src={instagram} alt="Instagram" />
          <img src={pintrest} alt="Pinterest" />
        </div>
      </div>
    </div>
  );
}

export default Footer;