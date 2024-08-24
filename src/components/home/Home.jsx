import React from "react";
import { TypeAnimation } from "react-type-animation";
import { achievements } from "./achievements";
import { ProjectCard } from "../projectCard/ProjectCard";
import { Testimonial } from "../testimonials/Testimonial";
import { Footer } from "./Footer";

import "./home.css";
import { Skills } from "../skills/Skills";
import { Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="home">
      <section className="upper">
        <div className="heading">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I'm sudhanshu kumar",
              1000,
              "I'm a web Developer",
              1000,
            ]}
            wrapper="span"
            speed={10}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
          <p>
            Welcome to my web development journey! <br /> My name is Sudhanshu
            Kumar, and I'm thrilled to have you visit my webpage.
          </p>
        </div>
        <div className="image">
          <img src="image/sudhanshu.png" alt="" />
        </div>
      </section>
      <section className="achievements">
        {/* {achievements.map((data, index) => {
          return (
            <div key={index} className="achieve">
              <h1 className="icon">{data.icon}</h1>
              <h1>{data.number}</h1>
              <h2>{data.name}</h2>
            </div>
          );
        })} */}
        <Container>
          <Row>
            <Col>
            <Skills/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="projects">
        <div className="projectHeading">
          <div className="projectCardContainer">
            <ProjectCard />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonialContainer">
          <h1 className="testimonialHeading">#Testimonials</h1>
          <div className="singlePeople">
            <Testimonial />
          </div>
        </div>
      </section>

      <section className="homeFooter">
        <Footer />
      </section>
    </div>
  );
};
