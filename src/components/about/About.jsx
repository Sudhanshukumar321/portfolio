import React from "react";
import "./about.css";
import '../home/home.css';

const About = () => {
  return (
    <div className="about">
      <div className="image">
        <img src="image/4.jpg" alt="myPhoto" />
      </div>
      <div className="detailsAbout">
        <div className="aboutHeading">
          <h1>About Me</h1>
        </div>
        <p>
          Welcome to my <strong>web development</strong> journey! My name is
          <strong> Sudhanshu Kumar</strong>, and I'm thrilled to have you visit
          my webpage.
          <br />
          <br />
          I hail from the picturesque town of Siwan in Bihar, India. I recently
          completed my Bachelor of Computer Applications (BCA) degree, where I
          gained a solid foundation in programming, database management, and
          software development. Throughout my academic journey, I discovered my
          passion for creating innovative and user-friendly web applications.
          <br />
          <br />
          Web development has become my canvas for transforming ideas into
          reality. I find immense joy in harnessing the power of technology to
          build captivating and functional web apps that enhance user
          experiences. With every line of code I write, I strive to create
          seamless and intuitive interfaces that leave a lasting impression. I
          believe that continuous learning is the key to staying at the
          forefront of this ever-evolving field. <br />
          <br />
          By keeping myself updated with the latest web development trends and
          technologies, I ensure that I can deliver modern and cutting-edge
          solutions to address diverse user needs.In addition to my technical
          skills, I value collaboration and effective communication. I enjoy
          working in a team environment, where different perspectives merge to
          create exceptional results.
          <br />
          <br />
          By actively listening to clients and understanding their vision, I aim
          to craft customized web applications that exceed expectations. Join me
          on this exciting journey as we embark on a web development adventure
          together. Feel free to explore my portfolio and get in touch to
          discuss your ideas and project requirements.
          <br />
        </p>
        <p style={{ color: "blue", marginTop: "1em" }}>
          <strong>
            Let's collaborate and bring your digital aspirations to life!
          </strong>
        </p>
      </div>
    </div>
  );
};

export default About;
