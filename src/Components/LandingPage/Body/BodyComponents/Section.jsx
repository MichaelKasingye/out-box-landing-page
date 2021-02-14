import React from "react";
import "./section.css";
function Section(props) {
  return (
    <div className="section">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Section;
