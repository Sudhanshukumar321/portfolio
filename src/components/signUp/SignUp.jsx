import React from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc';
import {useState} from 'react';

export const SignUp = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    firstName:'',lastName:'',email:'',createPassword:'',confirmPassword:'',
  })

  const changeHandler = (event) =>{
    
    setFormData((previous)=>{
      return({...previous,[event.target.name]:event.target.value})
    })
  }
  const submitData = (event) =>{
    event.preventDefault();
      if(formData.createPassword !== formData.confirmPassword){
        alert("Create Password and Confirm Password should be Same");
        return;
      }
    alert("Account is Created");
    setIsLoggedIn(false);
    navigate("/");
    // console.log(formData)
  }
  return (
    <div className="signUp">
      <div className="container">
        <h1 className="heading">Join the millions learners to code with codeTuber  for free</h1>
        <p>Build Skills for today, tomorrow, and beyond.</p>
        <form className="form" onSubmit={submitData}>
          <div className="fullName">
            <div className="first">
              <label htmlFor="firstName">First Name<sup>*</sup></label>
              <br />
              <input
                required
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={changeHandler}
              />
            </div>
            <div className="last">
              <label htmlFor="lastName">Last Name<sup>*</sup></label>
              <br />
              <input
                required
                type="text"
                placeholder="Enter Last name"
                name="lastName"
                value={formData.lastName}
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <label htmlFor="email">Email Address<sup>*</sup></label><br />
          <input type="text" className="email" placeholder="Enter email address" name="email" value={formData.email}
                onChange={changeHandler} required/><br />
          
          <div className="password">
            <div className="create">
              <label htmlFor="createPassword">Create Password<sup>*</sup></label>
              <br />
              <input
                required
                type="password"
                name="createPassword"
                placeholder="Enter Password"
                value={formData.createPassword}
                onChange={changeHandler}
              />
            </div>
            <div className="confirm">
              <label htmlFor="confirmPassword">Confirm Password<sup>*</sup></label>
              <br />
              <input
                required
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={changeHandler}
              />
            </div>
          </div>

          <button id="submit">Create Account</button>
          <br />
        </form>
        <h4>OR</h4>
        <div className="google">
          <Link to='#'><FcGoogle/>Sign in with Google</Link>
        </div>
      </div>
    </div>
  );
};
