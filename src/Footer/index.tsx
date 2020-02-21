import React from "react";

import { Button, Icon, Input } from "antd";

const { TextArea } = Input;

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer-flex">
      <h2>Questions or comments?</h2>
      <p>
        Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur
        tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus.
      </p>
      <form method="post" className="footer-flex">
        <div className="row">
          <Input placeholder="Name"></Input>
          <Input placeholder="Email"></Input>
        </div>
        <div className="row">
          <TextArea placeholder="Message"></TextArea>
        </div>
        <div className="row">
          <Button className="button">Send Message</Button>
        </div>
      </form>

      <ul className="social-media footer-flex-row">
        <li>
          <Icon type="twitter" className="icon"></Icon>
        </li>
        <li>
          <Icon className="icon" type="facebook"></Icon>
        </li>
        <li>
          <Icon className="icon" type="instagram"></Icon>
        </li>
        <li>
          <Icon className="icon" type="github"></Icon>
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
