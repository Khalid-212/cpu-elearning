import React from "react";
import "./courseCard.css";

function CourseCard({ img, title, description }) {
  return (
    <div className="courseCard0">
      <div className="courseImg0">
        <img src={img} alt="" />
      </div>
      <div className="cardTitle0">{title}</div>
      <div className="cardDescription0">{description}</div>
    </div>
  );
}

export default CourseCard;