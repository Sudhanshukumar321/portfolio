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
            <NavLink to="https://skgblog.onrender.com/" target='_blank'>Blog</NavLink>
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
