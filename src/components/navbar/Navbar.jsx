// import React, {  useState } from "react";
// import "./navbar.css";
// import { NavLink, Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCancelCircle } from "react-icons/im";
// import toast from "react-hot-toast";

// const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
//   const [showSidebar, setShowSideBar] = useState(false);

//   const signedOutHandler = () => {
//     toast.success("Signed Out Successfully");
//     setIsLoggedIn(false);
//   }

//   function sideClickHandler(){
//     setShowSideBar(!showSidebar);
//   }

//   return (
//     <>
//       <div className="header">
//         <div className="logo">
//           <Link to="/">
//             <img src="image/skg1.png" alt="helo" />
//             <span>Sudhanshu</span>
//           </Link>
//         </div>

//         <div id="links" className={showSidebar ? "links hide" : "links" }>
//           <div className="menu">
//             <ul>
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about">About</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/blog">Blog</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact">Contact</NavLink>
//               </li>
//             </ul>
//           </div>
//           <div className="navBtn">
//             {!isLoggedIn && (
//               <Link to="/signIn">
//                 <button>Sign in</button>
//               </Link>
//             )}
//             {!isLoggedIn && (
//               <Link to="/signUp">
//                 <button>Sign up</button>
//               </Link>
//             )}
//             {isLoggedIn && (
//               <Link to="/">
//                 <button onClick={signedOutHandler}>Sign Out</button>
//               </Link>
//             )}
//             {isLoggedIn && (
//               <Link to="/dashboard">
//                 <button>Dashboard</button>
//               </Link>
//             )}
//           </div>

//         </div>
//         <div className="sidebarIcon ">
//               <span onClick={sideClickHandler}>
//                 {
//                   showSidebar ? <ImCancelCircle/> : <GiHamburgerMenu />
//                 }

//               </span>
//             </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import toast from "react-hot-toast";
import "./navbar.css";
import { Link, NavLink, Navigate } from "react-router-dom";

function CollapsibleExample({ isLoggedIn, setIsLoggedIn }) {
    const signedOutHandler = () => {
      localStorage.removeItem("lastname");
      localStorage.clear();
      toast.success("Signed Out Successfully");
      setIsLoggedIn(false);
      Navigate("/");
    }
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar fixed-top">
      <Container>
        <Navbar.Brand href="/" style={{textShadow: "2px 2px 6px white"}}>SKG</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/blog">Blog</NavLink>
             {!isLoggedIn && (<NavLink to="/signin">Login</NavLink> )}
             {!isLoggedIn && (<NavLink to="/signup">Sign up</NavLink> )}
             {isLoggedIn && (<NavLink to="/dashboard">Dashboard</NavLink> )}
             {isLoggedIn && (<Link to='/'  onClick={signedOutHandler}>Log Out</Link> )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
