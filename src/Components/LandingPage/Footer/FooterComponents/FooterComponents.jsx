import React from "react";
import "./FooterComponents.css";

export function FooterTItle() {
  return (
    <div className="footer_title">
      <h5>Contact us</h5>
    </div>
  );
}
export function ContactInfo() {
  return (
    <div className="ContactInfo">
      <h6>Reach us on these</h6>
      <p>TEL:888-888-888 </p>
      <p>FAX:888-888-888 </p>
    </div>
  );
}
export function Form(props) {
  return (
    <form className="form">
      <input type="email" placeholder="email" />
      <textarea name="form" cols="20" rows="8" placeholder="text"></textarea>
    </form>
  );
}
