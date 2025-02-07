import React from "react";
import logo from "../assets/logo.webp";
import "../App.css";
import { footerIcon, footerLink } from "../contants/FooterLink";

export default function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <div className="left-footer">
          <img src={logo} alt="" />
          <h4>The smarter way to start your next idea.</h4>
        </div>

        <div className="right-footer">
          {footerLink.map((link,index) => {
            return (
              <div key={index}>
                <div>{link.heading}</div>
                <a href="/#">{link.link1}</a>
                <a href="/#">{link.link2}</a>
                <a href="/#">{link.link3}</a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer-bottom">
        <h5>© Cruip.com. All rights reserved.</h5>
        <div className="footer-icon">
          {footerIcon.map((data,index) => {
            return <i key={index} className={data.icon}></i>;
          })}
        </div>
      </div>
    </footer>
  );
}
