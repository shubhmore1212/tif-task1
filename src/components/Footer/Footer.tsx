import React from "react";
import "./index.css";
import { facebook, insta, logo, twitter } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="contact-us">
        <h1>Contact Us</h1>
        <div>
          <p className="address">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p className="email">example2020@gmail.com</p>
          <p className="phone">(904) 443-0343</p>
        </div>
      </div>
      <div className="more-links">
        <div className="more">
          <h3>More</h3>
          <p>About Us</p>
          <p>Products</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
        <div className="links">
          <h3>Social Links</h3>
          <div className="link-logo">
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
          </div>
          <p className="copy-right">© 2022 Food Truck Example</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
