import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeLineCard } from "./VerticalTimeLineCard";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";

export const Experience = () => {
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
  );
};
