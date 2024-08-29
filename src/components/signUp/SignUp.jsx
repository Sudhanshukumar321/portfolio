import React from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import toast from "react-hot-toast";
import { Hero } from "../Hero-Banner/Hero";

export const SignUp = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    setFormData((previous) => {
      return { ...previous, [event.target.name]: event.target.value };
    });
  };
  const submitData = (event) => {
    event.preventDefault();
    if (formData.createPassword !== formData.confirmPassword) {
      toast.error("Create Password and Confirm Password should be Same");
      return;
    }
    toast.success("Account is Created");
    setIsLoggedIn(false);
    navigate("/");
    // console.log(formData)
  };
  return (
    <div className="signup">
        <Hero heading="#Let's join with us" desc="Create an Account, We love to see you"/>
      <div className="container-lg container-md  container-fluid">
        <div className="row">
          <div className="d-md-flex gap-4  justify-content-between align-content-center">
            <div className="d-md-flex flex-column  col-lg-6 col-md-6 col-sm-12 p-3 shadow-lg rounded">
              <div>
                <h3 className="heading text-white">
                  Join the millions learners to code with codeTuber for free
                </h3>
                <p className="text-danger">
                  Build Skills for today, tomorrow, and beyond.
                </p>
              </div>

              <form class="row g-3 p-1" onSubmit={submitData}>
                <div class="col-md-6">
                  <label htmlFor="firstname" class="form-label text-white">
                    First Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    required
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={changeHandler}
                  />
                </div>
                <div class="col-md-6">
                  <label htmlFor="lastname" class="form-label text-white">
                    Last Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    required
                    placeholder="Enter Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={changeHandler}
                  />
                </div>
                <div class="col-12">
                  <label htmlFor="emailAddress" class="form-label text-white">
                    Email<sup>*</sup>
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    required
                    type="text"
                    class="form-control"
                    id="emailAddress"
                    placeholder="abcd@Gmail.com"
                  />
                </div>
                <div class="col-md-6">
                  <label htmlFor="Password" class="form-label text-white">
                    Password<sup>*</sup>
                  </label>
                  <input
                    required
                    type="password"
                    name="createPassword"
                    placeholder="Enter Password"
                    value={formData.createPassword}
                    onChange={changeHandler}
                    class="form-control"
                    id="Password"
                  />
                </div>
                <div class="col-md-6">
                  <label
                    htmlFor="confirmPassword"
                    class="form-label text-white"
                  >
                    Confirm Password<sup>*</sup>
                  </label>
                  <input
                    required
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                  />
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-outline-primary w-100">
                    Create Account
                  </button>
                </div>
              </form>
              <div className="text-center">
                <h4 className="text-white mt-2">OR</h4>
                <div className="google fs-3">
                  <Link to="#">
                    <FcGoogle />
                    Sign in with Google
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-sm-4">
              <img src="/image/istockphoto-1490901300-612x612.webp" class="img-fluid float-end w-100 h-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
