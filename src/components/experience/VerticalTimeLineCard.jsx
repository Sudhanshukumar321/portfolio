import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "./VerticalTimeLineCard.css";

export const VerticalTimeLineCard = ({date,icon,headingOne,headingTwo,description}) => {
  return (
    <VerticalTimelineElement
        className="vertical-timeline-element--work w-100"
        contentStyle={{ background: "rgba(255,255,255,0.1)",  color: "#fff", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",WebkitBoxShadow: "#00000069 0px 0px 10px",boxShadow: "#00000069 0px 0px 10px"}}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date= {date}
        iconStyle={{ background: "rgb(208 180 205)", color: "red" }}
        icon={icon}
      >
        <h4 className="vertical-timeline-element-title" style={{fontFamily: "poppins"}}>{headingOne}</h4>
        <h6 className="vertical-timeline-element-title">{headingTwo}</h6>
        <p style={{fontFamily: "nunito", fontSize: "0.9rem"}}>
          {description}
        </p>
      </VerticalTimelineElement>
  )
}

