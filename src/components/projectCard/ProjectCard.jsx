import React from "react";
import { projects } from "./projectData";
import "./projectCard.css";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

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

    // <div class="section">
    //   <div class="content-wrap">
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-sm-12 col-md-12">
    //           <h2 class="section-heading text-primary mb-5">Latest Projects</h2>
    //         </div>
    //       </div>

    //       <div class="row ">
    //         <div class="col-sm-12 col-md-12 col-lg-4">
    //           <div class="feature-box-7 shadow">
    //             <div class="media-box">
    //               <a href="content-writing.php">
    //                 <img
    //                   src="/image/m-100.jpg"
    //                   alt=""
    //                   class="img-fluid"
    //                 />
    //               </a>
    //             </div>
    //             <div class="body">
    //               <div class="info-box">
    //                 <div class="text">
    //                   <div class="title">Content Writing</div>
    //                   <a
    //                     href="#"
    //                     class="btn btn-secondary"
    //                     title="Get Detail"
    //                   >
    //                     Visit
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
