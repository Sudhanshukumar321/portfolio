import React from 'react'
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import "./contact.css";
import './icon.css';

export const Icon = () => {
  return (
    <>
      <ul className='fs-5 list-style-none'>
            <li>
              <Link to="#" >
                <a href="tel:7739058330" className='text-white'>
                  <span className="icon call">
                    <BiPhoneCall />
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="#">
                <a href="mailto:sudhanshukush321@gmail.com" className='text-danger'>
                  <span className="icon mail">
                    <HiOutlineMail />
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link className='text-danger'
                to="https://instagram.com/sudhanshukush321?igshid=ZDc4ODBmNjlmNQ==">
                <span className="icon instagram">
                  <BsInstagram />
                </span>
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/sudhanshukush321">
                <span className="icon facebook">
                  <AiOutlineFacebook />
                </span>
              </Link>
            </li>
            <li>
              <Link className='text-white' to="https://github.com/Sudhanshukumar321">
                <span className="icon git">
                  <AiOutlineGithub />
                </span>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/sudhanshu-kumar-7a6102214">
                <span className="icon linkedin">
                  <AiOutlineLinkedin />
                </span>
              </Link>
            </li>
            <li>
              <Link className='text-danger' to="#" >
                <span className="icon youtube">
                  <AiOutlineYoutube/>
                </span>
              </Link>
            </li>
          </ul>  
    </>
  )
}
