import React from 'react'
import {Icon} from '../contact/Icon';
import { Link,NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import './footer.css';

export const Footer = () => {
  return (
        <div className="footer ">
           <div className="footerIcon">
              <Icon className="icon"/>
           </div>
           <div className="footerMiddle">
                <NavLink className='text-secondary text-decoration-none' to="/">Home</NavLink>
                <NavLink className='text-secondary text-decoration-none' to="/about">About</NavLink>
                <NavLink className='text-secondary text-decoration-none' to="/blog">Blog</NavLink>
                <NavLink className='text-secondary text-decoration-none' to="/contact">Contact</NavLink>
                <Link className='text-secondary text-decoration-none'>FAQs</Link>
           </div>
           <div className="footerRight">
                <h4>Other Links</h4>
                <Link className='text-secondary text-decoration-none'>Futures Skills</Link>
                <Link className='text-secondary text-decoration-none'>Current Skills</Link>
                <div htmlFor="search">
                    <input type="text" className="search" placeholder='SEARCH' name='search'/>
                    <span className="searchIcon"><AiOutlineSearch/></span>
                </div>
           </div>
        </div> 
  )
}
