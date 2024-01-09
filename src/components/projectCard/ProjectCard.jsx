import React from "react";
import { projects } from "./projectData";
import "./projectCard.css";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, A11y,Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ProjectCard = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={30}
      // how many slide will show
      slidesPerView={'auto'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {projects.map((project) => {
        return (
          <SwiperSlide>
            <div className="main">
            <div className="projectCard" key={project.id}>
              <Link to={project.source}>
                <div className="image">
                  <img src={project.image} alt="" />
                </div>
                <div className="details">
                  <div className="cardHeading">
                    <h1>{project.title}</h1>
                  </div>
                  <div className="tool">
                    {project.tools.map((tool, index) => {
                      return <p key={index}>#{tool}</p>;
                    })}
                  </div>
                  <p className="description">{project.description}</p>
                </div>
              </Link>
            </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
