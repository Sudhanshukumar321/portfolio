import { projects } from "./projectData";
import "./projectCard.css";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      // autoPlay={true}
      infinite={true}
      swipeable={true}
      draggable={true}
      itemClass="project-item-class"
    >
      {projects.map((project) => {
        return (
          <div className="main w-100 h-100">
            <div className="projectCard w-100 h-100" key={project.id}>
              <div className=" front">
                <img src={project.image} alt="" />
              </div>
              <div className="details back"> 
                 <div className="cardHeading">
                   <h3 className="text-align-center">{project.title}</h3>
                 </div>
                 <div className="tool">
                   {project.tools.map((tool, index) => {
                     return <span key={index}>{`#${tool} `}</span>;
                   })}
                 </div>
                 <p className="description">{project.description}</p>
                 <Link to={project.source}  target="_blank" >Chek It</Link>
               </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
