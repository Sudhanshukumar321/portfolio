import React from "react";
import "./testimonial.css";
import { peoples } from "./testimonialData.js";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
export const Testimonial = () => {
  
    return (
     
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination,Autoplay, A11y]}
        spaceBetween={30}
        // how many slide will show
          slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        { peoples.map((people) => {
          return (
            <SwiperSlide>
              <div className="testmain">
                <div className="people" key={people.id}>
                  <img src={people.image} alt="image" />
                  <h1>{people.name}</h1>
                  <h3>{people.role}</h3>
                  <p>{people.comments}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
};
