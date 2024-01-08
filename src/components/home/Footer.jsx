import React from 'react'
import {Icon} from '../contact/Icon';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import './footer.css';

export const Footer = () => {
  return (
        <div className="footer">
           <div className="footerIcon">
              <Icon className="icon"/>
           </div>
           <div className="footerMiddle">
                <h4>About CodeTuber</h4>
                <Link>Home</Link>
                <Link>Contact</Link>
                <Link>Blog</Link>
                <Link>FAQs</Link>
           </div>
           <div className="footerRight">
                <h4>Other Links</h4>
                <Link>Futures Skills</Link>
                <Link>Current Skills</Link>
                <div htmlFor="search">
                    <input type="text" className="search" placeholder='SEARCH' name='search'/>
                    <span className="searchIcon"><AiOutlineSearch/></span>
                </div>
           </div>
        </div> 
  )
}
