import React from "react";
import "./contact.css";

import { Icon } from "./Icon";

const Contact = () => {

  const submitMessage = () =>{
    alert('Thanks for Your Message');
  }
  return (
    <div className="contact">
      <div className="contactDetails">
        <div className="heading">
          <h1>Contact Me</h1>
        </div>
        <div className="details">
          <div className="image">
            <img src="image/2.jpg" alt="" />
          </div>
          <form className="form" onSubmit={submitMessage}>
            <div className="formHeading">
              <h2>Get in Touch</h2>
            </div>
            <div className="name">
              <label htmlFor="firstName">
                First Name<sup>*</sup>
                <br />
                <input type="text" placeholder="First Name" name="firstName" required />
                <br />
              </label>
              <label htmlFor="lastName">
                Last Name<sup>*</sup> <br />
                <input type="text" placeholder="Last Name" name="lastName" required/>
                <br />
              </label>
            </div>
            <label htmlFor="email">
              Email<sup>*</sup>
              <br />
              <input type="email" placeholder="abc@gmail.com" name="email" required />
              <br />
            </label>
            <label htmlFor="message">
              Message<sup>*</sup> <br />
              <textarea type="text" placeholder="Message" name="message" required/>
              <br />
            </label>
            <button>Send</button>
          </form>
        </div>
        <div className="contactFooter">
          <Icon/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
