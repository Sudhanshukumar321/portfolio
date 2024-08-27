import React from "react";
import "./contact.css";

import toast from "react-hot-toast";
import { BiPhoneCall } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Contact = () => {
  const submitMessage = (e) => {
    e.preventDefault();
    toast.success("Thanks for Your Message");
  };
  return (
    <div className="contact position-relative">
      <div className="container-lg container-md  container-fluid">
        <div className="row">
          <div className="contactDetails">
            <div
              className="heading col-sm-12 text-center mb-5"
              style={{ borderBottom: "2px dashed #007bff" }}
            >
              <div className="formHeading">
                <h2>Get in Touch</h2>
              </div>
            </div>
            <div className="d-md-flex justify-content-between align-content-center gap-5">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="image">
                  <img
                    src="image/istockphoto-1490901300-612x612.webp"
                    alt="contact us"
                    className="img-fluid w-100 h-100"
                  />
                </div>
              </div>
              <div className="details col-lg-6 col-md-6 col-sm-12 p-3 shadow-lg rounded">
                <form class="row" onSubmit={submitMessage}>
                  <div class="col-md-12">
                    <label htmlFor="name" class="form-label">
                      User Name
                    </label>
                    <sup>*</sup>
                    <input
                      type="name"
                      class="form-control"
                      required
                      id="name"
                      placeholder="User Name"
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="email" class="form-label">
                      Email Address<sup>*</sup>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      required
                      id="email"
                      placeholder="abcd@gmail.com"
                    />
                  </div>
                  <div class="col-md-12 mb-2">
                    <label htmlFor="textMessage" class="form-label">
                      Message
                    </label>
                    <sup>*</sup>
                    <textarea
                      class="form-control"
                      required
                      id="textMessage"
                      rows="3"
                      placeholder="Messages"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-outline-primary w-100">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <nav class="social d-none d-lg-block ">
          <ul>
            <li class="call">
              <a href="tel:+91 7739058330">
                Call Us
                <i>
                  <BiPhoneCall />
                </i>
              </a>
            </li>
            <li class="google-plus">
              <a href="sudhanshkush321@gmail.com" target="_blank" rel="noreferrer">
                Mail
                <i>
                  <HiOutlineMail />
                </i>
              </a>
            </li>
            <li class="instagram">
              <a href="https://instagram.com/sudhanshukush321?igshid=ZDc4ODBmNjlmNQ==" target="_blank" rel="noreferrer">
                Instagram
                <i>
                  <BsInstagram />
                </i>
              </a>
            </li>
            <li class="facebook">
              <a href="https://www.facebook.com/sudhanshukush321" target="_blank" rel="noreferrer">
                Facebook
                <i>
                  <AiOutlineFacebook />
                </i>
              </a>
            </li>
            <li class="github">
              <a href="https://github.com/Sudhanshukumar321" target="_blank" rel="noreferrer">
                Github
                <i>
                  <AiOutlineGithub />
                </i>
              </a>
            </li>
            <li class="linkedin">
              <a href="https://www.linkedin.com/in/sudhanshu-kumar-7a6102214" target="_blank" rel="noreferrer">
                Linkedin
                <i>
                  <AiOutlineLinkedin />
                </i> 
              </a> 
            </li>
            <li class="youtube"> 
              <Link href="https://www.youtube.com/@codetuber8734" target="_blank" rel="noreferrer" >
                Youtube
                <i>
                  <AiOutlineYoutube />
                </i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Contact;
