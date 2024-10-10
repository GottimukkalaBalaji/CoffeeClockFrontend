import React, { useState } from "react";
import Axios from "axios";
import './ContactUs.css';
import contact from '../images/Coffee.png';

const Contactus = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Message: ""
  });

  const addUser = (e) => {
    e.preventDefault(); // Prevent page reload
    Axios.post("http://localhost:5000/contact-us", {
      Name: data.Name,
      Email: data.Email,
      Message: data.Message,
    })
      .then((response) => {
        console.log("Data inserted: ", response.data);
        setData({
          Name: "",
          Email: "",
          Message: "",
        });
      })
      .catch((err) => {
        console.error("Error inserting data: ", err);
      });
  };

  return (
    <div className="App">
      <div className="contact-us">
        <div className="contact-form">
          <h2>Contact us</h2>
          <div className="opening-hours">
            <p>Opening Hours</p>
            <p>Mon - Sat: 9am - 4pm</p>
            <p>Sun will be closed</p>
          </div>
          <form onSubmit={addUser}> {/* Form submission triggers addUser */}
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={data.Name}
              onChange={(e) => setData({ ...data, Name: e.target.value })}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="E-mail"
              value={data.Email}
              onChange={(e) => setData({ ...data, Email: e.target.value })}
              required
            />
            <textarea
              name="Message"
              placeholder="Message"
              value={data.Message}
              onChange={(e) => setData({ ...data, Message: e.target.value })}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="image-section">
          <img src={contact} alt="coffeeplace" />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
