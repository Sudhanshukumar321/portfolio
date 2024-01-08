import React, {  useState } from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showSidebar, setShowSideBar] = useState(false);
  
  const signedOutHandler = () => {
    alert("Signed Out Successfully");
    setIsLoggedIn(false);
  }

  function sideClickHandler(){
    setShowSideBar(!showSidebar);
  }


  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="image/skg1.png" alt="helo" />
            <span>Sudhanshu</span>
          </Link>
        </div>
        
        <div id="links" className={showSidebar ? "links hide" : "links" }>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="navBtn">
            {!isLoggedIn && (
              <Link to="/signIn">
                <button>Sign in</button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/signUp">
                <button>Sign up</button>
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/">
                <button onClick={signedOutHandler}>Sign Out</button>
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/dashboard">
                <button>Dashboard</button>
              </Link>
            )}
          </div>
          
        </div>
        <div className="sidebarIcon ">
              <span onClick={sideClickHandler}>
                {
                  showSidebar ? <ImCancelCircle/> : <GiHamburgerMenu />
                }
                  
              </span>
            </div>
      </div>
    </>
  );
};

export default Navbar;
