import React from "react";
import "./body.css";
import Section from "../BodyComponents/Section";
import { HiOfficeBuilding } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import { AiTwotoneBank } from "react-icons/ai";

function Body(props) {
  return (
    <div className="body">
      <div className="entire_section">
        <HiOfficeBuilding size={props.size} color={props.color} />
        <div className="body_section">
          <Section
            title="About the company"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi saepe quos ipsa at dolorum, debitis magnam voluptate obcaecati cumque delectus."
          />
        </div>
      </div>

      <div className="entire_section">
        <BiWorld size={props.size} color={props.color} />
        <div className="body_section">
          <Section
            title="Our values"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi saepe quos ipsa at dolorum, debitis magnam voluptate obcaecati cumque delectus."
          />
        </div>
      </div>

      <div className="entire_section">
        <AiTwotoneBank size={props.size} color={props.color} />
        <div className="body_section">
          <Section
            title="Our Mission"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi saepe quos ipsa at dolorum, debitis magnam voluptate obcaecati cumque delectus."
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
