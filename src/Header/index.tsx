import React, { Component } from "react";

import { Icon } from "antd";

const Header: React.FC = () => (
  <div className="header">
    <Icon
      type="message"
      style={{ fontSize: "7em", color: "#4eb980" }}
      theme="filled"
    />
    <h1>Hi. I'm ZUOQIN HU (ISABELLA).</h1>
    <p>
      A 5 years experienced Web developer in Paris{" "}
      <a target="blank" href="http://www.linkedin.com/in/zuoqin-hu-030a7131">
        Check out my LinkedIn
      </a>
      <br></br>A trilingual girl who love sharing{" "}
      <a target="blank" href="https://www.instagram.com/isabella608hu/">
        check out my Instagram
      </a>
      .
    </p>
  </div>
);

export default Header;
