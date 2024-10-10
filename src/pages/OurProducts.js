import React from 'react';
import './OurProducts.css'; 
import CoffeedesignImage from '../images/Expresso.png';
import ColdbrewImage from '../images/i2.png';
import Coffeedesign3Image from '../images/i3.png';

const Products = () => {
  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        <div className="product-item">
          <img src={CoffeedesignImage} alt="Expresso Americano" />
          <h3>Expresso Americano</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
        </div>
        <div className="product-item">
          <img src={ColdbrewImage} alt="Cold Brew coffee" />
          <h3>Cold Brew coffee</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
        </div>
        <div className="product-item">
          <img src={Coffeedesign3Image} alt="Cappuccino Coffee" />
          <h3>Cappuccino Coffee</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
        </div>
      </div>
    </div>
  );
}

export default Products;