import React from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
    toast.success(`Hii ${formData.email.split("@")[0]}, welcome to Dashboard`);
    setIsLoggedIn(true);
    // Set Item to session storage
    localStorage.setItem("lastname", formData.email.split("@")[0]);
    navigate("/dashboard");
  };

  return (
    <div className="signIn">
      <div className="signContainer">
        <h1 className="display-1">Welcome Back</h1>
        <div className="formContainer">
          {/* <form className="form" onSubmit={submitData}>
            <p>Build Skills for today, tomorrow, and beyond.</p>
            <label htmlFor="email">
              Email Address<sup>*</sup>
            </label>
            <br />
            <input
              type="email"
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
          </form> */}
          <form className="form" onSubmit={submitData}>
            <p>Build Skills for today, tomorrow, and beyond.</p>
            <div class="mb-3">
              <label for="Email" class="form-label">
                Email address
              </label>
              <sup>*</sup>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                required
                onChange={changeHandler}
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="Password" class="form-label">
                Password
              </label>
              <sup>*</sup>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                required
                onChange={changeHandler}
                class="form-control"
                id="Password"
              />
            </div>
            <div className="d-md-flex signInButton">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <button type="submit" class="btn btn-outline-primary">
                  Sign In
                </button>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 text-end signForgot">
                <Link to="#">Forgot Password</Link>
              </div>
            </div>
          </form>
        </div>
        <h4>OR</h4>
        <div className="signGoogle">
          <p>
            <Link to="#">
              <FcGoogle /> Sign in with Google
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
