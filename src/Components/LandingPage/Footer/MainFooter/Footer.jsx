import React from "react";
import "./Footer.css";
import {
  FooterTItle,
  Form,
  ContactInfo,
} from "../FooterComponents/FooterComponents";
function Footer() {
  return (
    <div className="Footer">
      <FooterTItle />
      <div className="footer_section">
        <ContactInfo />
        <Form />
      </div>
    </div>
  );
}

export default Footer;
