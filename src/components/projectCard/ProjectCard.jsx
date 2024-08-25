// import React from "react";
// import { projects } from "./projectData";
// import "./projectCard.css";
// import { Link } from "react-router-dom";
// import Swiper core and required modules
// import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeLineCard } from "./VerticalTimeLineCard";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";

export const ProjectCard = () => {
  return (
    <VerticalTimeline>
      <VerticalTimeLineCard
        date=" September 2023 - October 2023"
        icon={<BsPersonWorkspace />}
        headingOne="Tech-A-Intern"
        headingTwo="(virtual internship)"
        description="During my internship at Tech-A-Intern, I honed my web
                      development and design skills through hands-on projects.
                      Collaborating with a dynamic team, I contributed to real-world projects, gaining valuable experience in HTML, CSS,
                      and JavaScript. The supportive environment allowed me to
                      explore UI/UX principles and responsive design, enhancing
                      my creativity and problem-solving abilities. Overall, this
                      internship at Tech-A-Intern has been a pivotal step in my journey towards becoming a proficient and versatile web developer and designer."
      />
      <VerticalTimeLineCard
        date="October 2023"
        icon={<BsPersonWorkspace />}
        headingOne="Bharat intern"
        headingTwo="(virtual internship)"
        description="I successfully tackled real-world challenges, from designing intuitive user interfaces to optimizing server-side
                    functionality. My innovative solutions not only met project
                    requirements but also exceeded expectations. The
                    experience at Bharat Intern provided valuable insights into
                    industry best practices, solidifying my foundation as a
                    proficient full stack developer."
      />
      <VerticalTimeLineCard
        date="2023 - present"
        icon={<IoSchool />}
        headingTwo="MCA (Computers Application)"
        headingOne="Post Graduation"
        description="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
      />
      <VerticalTimeLineCard
        date="2020 - 2023"
        icon={<IoSchool />}
        headingOne="Graduation"
        headingTwo="BCA (Computers Application)"
        description="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
      />
      <VerticalTimeLineCard
        date="2020"
        icon={<IoSchool />}
        headingOne="Class XII"
        description="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
      />
      <VerticalTimeLineCard
        date="2018"
        icon={<IoSchool />}
        headingOne="Class X"
        description="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
      />
      
    </VerticalTimeline>
    // <Swiper
    //   modules={[Navigation, Pagination, A11y,Autoplay]}
    //   spaceBetween={30}
    //   slidesPerView={'auto'}
    //   autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   }}
    //   navigation
    //   pagination={{ clickable: true }}
    // >
    //   {projects.map((project) => {
    //     return (
    //       <SwiperSlide>
    //         <div className="main">
    //         <div className="projectCard" key={project.id}>
    //           <Link to={project.source}>
    //             <div className="image">
    //               <img src={project.image} alt="" />
    //             </div>
    //             <div className="details">
    //               <div className="cardHeading">
    //                 <h1>{project.title}</h1>
    //               </div>
    //               <div className="tool">
    //                 {project.tools.map((tool, index) => {
    //                   return <p key={index}>#{tool}</p>;
    //                 })}
    //               </div>
    //               <p className="description">{project.description}</p>
    //             </div>
    //           </Link>
    //         </div>
    //         </div>
    //       </SwiperSlide>
    //     );
    //   })}
    // </Swiper>

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
