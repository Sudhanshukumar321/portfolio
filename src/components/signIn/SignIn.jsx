import React from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    // console.log(event.target);

    setFormData((previous) => {
      return { ...previous, [event.target.name]: event.target.value };
    });
  };
  const submitData = (event) => {
    event.preventDefault();
    alert(`Hii ${formData.email} welcome to Dashboard`);
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="signIn">
      <div className="signContainer">
        <h1>Welcome Back</h1>
        <div className="formContainer">
          <form className="form" onSubmit={submitData}>
            <p>Build Skills for today, tomorrow, and beyond.</p>
            <label htmlFor="email">
              Email Address<sup>*</sup>
            </label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              required
              onChange={changeHandler}
            />
            <br />
            <label htmlFor="password">
              Password<sup>*</sup>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              required
              onChange={changeHandler}
            />
            <br />
            <div className="signForgot">
              <Link to="#">Forgot Password</Link>
            </div>
            <button className="submit">Sign In</button>
            <br />
          </form>
        </div>
        <h4>OR</h4>
        <div className="signGoogle">
          <p><Link to="#">
            <FcGoogle /> Sign in with Google
          </Link></p>
        </div>
      </div>
    </div>
  );
};
