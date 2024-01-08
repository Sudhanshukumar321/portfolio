import React from "react";
import { projects } from "./projectData";
import './projectCard.css';
import { Link } from "react-router-dom";

export const ProjectCard = () => {

  return(
    projects.map((project) => {
        return (  
          <div className="projectCard" key={project.id}>
            <Link to={project.source} >
            <div className="image">
              <img src={project.image} alt="" />
            </div>
            <div className="details">
              <div className="cardHeading">
                <h1>{project.title}</h1>
              </div>
              <div className="tool">
                {
                    project.tools.map((tool,index)=>{
                        return(
                            <p key={index}>#{tool}</p>
                        )
                    })
                }
              </div>
              <p className="description">{project.description}</p>
            </div>
            </Link>
          </div>
        )
      })
  )

};
