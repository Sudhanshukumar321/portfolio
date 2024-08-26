import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ProjectCard } from "../projectCard/ProjectCard";
import { Footer } from "./Footer";

import "./home.css";
import { Skills } from "../skills/Skills";
import { Col, Container, Row } from "react-bootstrap";
import { Experience } from "../experience/Experience";

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
        <Container>
          <Row>
            <Col>
              <Skills />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="experience">
        <div className="experienceContainer">
          <h2 className="experienceHeading">Experience & Education</h2>
          <div className="w-100 h-100">
            <Experience />
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="projectContainer">
          <h2 className="projectHeading">Projects</h2>
          <div className="w-100 h-100">
            <ProjectCard />
          </div>
        </div>
      </section>
      <section className="homeFooter">
        <Footer />
      </section>
    </div>
  );
};
