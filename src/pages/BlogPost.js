import React from 'react';
import './BlogPost.css';
import blog1 from '../images/blog1.png';
import blog2 from '../images/blog2.png';

function Blog() {
  return (
    <div className="container">
      <h1>OUR LATEST BLOG</h1>
      <div className="blog">
        <div className="blog-post">
          <img src={blog1} alt="Espresso" />
          <h2>How to Brew the Perfect Espresso at Home</h2>
          <h3>BREWING</h3>
          <p>I’ve put together seven essential recommendations<br></br> 
          for turning a meh espresso into an Oh Wow shot—if<br></br>
           you’re making homemade espresso, you can’t<br>
           </br> pass these tips up for a perfect shot.</p>
          <center><button className="read-more-button">Read More</button></center>
        </div>
        <div className="blog-post">
          <img src={blog2} alt="Coffee Cup" />
          <h2>Have Acid Reflux? Don’t Stop Drinking Coffee – Try This Instead</h2>
          <h3>COFFEE BEANS</h3>
          <p>Everyone says to stop drinking coffee if you have acid<br></br>
           reflux. Don’t listen to them! There are other, better ways to<br></br>
           enjoy your daily brew without damaging your esophagus.<br></br> 
           Let us show you how to drink coffee without getting acid reflux.</p>
           
          <center><button className=" button read-more-button">Read More</button></center>
          
        </div>
      </div>
    </div>
  );
}

export default Blog;