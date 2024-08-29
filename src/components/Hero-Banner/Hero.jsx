import React from "react";
import './hero.css';

export const Hero = ({heading,desc}) => {
  return (
    <div id="hero">
      <h2>{heading}</h2>
      <p>{desc}</p>
    </div>
  );
};
