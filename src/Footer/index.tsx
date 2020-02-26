import { Icon } from "antd";
import React from "react";
import Form from "./Form";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer-flex">
      <h2>Questions about me?</h2>
      <p>I'm open for your questions about my profession and projects.</p>
      <Form />
      <ul className="social-media footer-flex-row">
        <li>
          <a href="">
            <Icon type="twitter" className="icon"></Icon>
          </a>
        </li>
        <li>
          <a href="">
            <Icon className="icon" type="facebook"></Icon>{" "}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/isabella608hu" target="_blank">
            <Icon className="icon" type="instagram"></Icon>
          </a>
        </li>
        <li>
          <a>
            <Icon className="icon" type="github"></Icon>
          </a>
        </li>
      </ul>
      <ul className="copyright footer-flex-row">
        <li>© Untitled. All rights reserved.</li>
        <li>
          Implemented by: <a href="#">Isabella HU</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
