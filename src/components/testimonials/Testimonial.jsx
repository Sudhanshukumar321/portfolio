import React from "react";
import "./testimonial.css";
import {peoples} from "./testimonialData.js";

export const Testimonial = () => {
  return peoples.map((people) => {
    return (
        <div className="people" key={people.id}>
          <img src={people.image} alt="" />
          <h1>{people.name}</h1>
          <h3>{people.role}</h3>
          <p>{people.comments}</p>
        </div>
    );
  });
};
