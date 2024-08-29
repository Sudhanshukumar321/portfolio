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
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Hero } from "../Hero-Banner/Hero";

const Contact = () => {
  const submitMessage = (e) => {
    e.preventDefault();
    toast.success("Thanks for Your Message");
  };
  return (
    <div className="contact position-relative">
      <Hero heading="#Let's join with us" desc="Send a Message, We love to hear your Message"/>
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
                <form className="row" onSubmit={submitMessage}>
                  <div className="col-md-12">
                    <label htmlFor="name" className="form-label">
                      User Name
                    </label>
                    <sup>*</sup>
                    <input
                      type="name"
                      className="form-control"
                      required
                      id="name"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="email" className="form-label">
                      Email Address<sup>*</sup>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      id="email"
                      placeholder="abcd@gmail.com"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label htmlFor="textMessage" className="form-label">
                      Message
                    </label>
                    <sup>*</sup>
                    <textarea
                      className="form-control"
                      required
                      id="textMessage"
                      rows="3"
                      placeholder="Messages"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-outline-primary w-100"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <nav className="social d-none d-lg-block ">
          <ul>
            <li className="call">
              <a href="tel:+91 7739058330">
                Call Us
                <i>
                  <BiPhoneCall />
                </i>
              </a>
            </li>
            <li className="google-plus">
              <a
                href="sudhanshkush321@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Mail
                <i>
                  <HiOutlineMail />
                </i>
              </a>
            </li>
            <li className="instagram">
              <a
                href="https://instagram.com/sudhanshukush321?igshid=ZDc4ODBmNjlmNQ=="
                target="_blank"
                rel="noreferrer"
              >
                Instagram
                <i>
                  <BsInstagram />
                </i>
              </a>
            </li>
            <li className="facebook">
              <a
                href="https://www.facebook.com/sudhanshukush321"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
                <i>
                  <AiOutlineFacebook />
                </i>
              </a>
            </li>
            <li className="github">
              <a
                href="https://github.com/Sudhanshukumar321"
                target="_blank"
                rel="noreferrer"
              >
                Github
                <i>
                  <AiOutlineGithub />
                </i>
              </a>
            </li>
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/in/sudhanshu-kumar-7a6102214"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
                <i>
                  <AiOutlineLinkedin />
                </i>
              </a>
            </li>
            <li className="youtube">
              <Link
                href="https://www.youtube.com/@codetuber8734"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
                <i>
                  <AiOutlineYoutube />
                </i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contact-map container">
        <div className="details">
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Address</h3>
          <div>
            <li>
              <i>
                <FaMapMarkerAlt />
              </i>
              <p>372 B Block Panki, Kanpur (up)</p>
            </li>
            <li>
              <i>
                <HiOutlineMail />
              </i>
              <p>sudhanshukush321@gmail.com</p>
            </li>
            <li>
              <i>
                <BiPhoneCall />
              </i>
              <p>+91 77390 58330</p>
            </li>
            <li>
              <i>
                <LuAlarmClock />
              </i>
              <p>10.00 - 16.00, Monday-Saturday</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14331.092823881998!2d84.30160115!3d26.106320999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724911402284!5m2!1sen!2sin"
            // width="500"
            // height="400"
            style={{ border: 0, textAlign: "center" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
