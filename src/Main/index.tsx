import React from "react";

import { Button, Icon } from "antd";

import CV from "../static/files/CV_zuoqin.pdf";

const Main: React.FC = () => (
  <div className="main">
    <div className="container">
      <h2>Recent Career Updates</h2>
    </div>
    <div className="feature-container">
      <section className="feature flex">
        <div className="flex-item icon-container">
          <Icon type="heart" className="icon"></Icon>
        </div>

        <div className="content flex-item">
          <h2>Front-end Developer in Wynd</h2>
          <h3>2018.12 - 2019.10 in Paris 15</h3>
          <p>
            Using React, Redux, React-router, Webpack, Typescript, Styled
            Component, Antd, Jest.
          </p>
        </div>
      </section>
      <section className="feature flex reverse">
        <div className="flex-item icon-container">
          <Icon type="coffee" className="icon"></Icon>
        </div>
        <div className="content flex-item">
          <h2>Front-end Developer in Pitchy</h2>
          <h3>2017.06 - 2018.09 in Paris 19</h3>
          <p>
            Using React.js, Redux, Webpack, Babel, Nodejs, Express.js, Mysql,
            Websocket.
          </p>
        </div>
      </section>
      <section className="feature flex">
        <div className="flex-item icon-container">
          <Icon type="global" className="icon"></Icon>
        </div>
        <div className="content flex-item">
          <h2>Web Developer in Kameleoon </h2>
          <h3>2015.01 - 2017.01 in Paris 9</h3>
          <p>
            Using HTML, CSS, Javascript, jQuery & UI, SASS, D3.js, Gulp, Groovy,
            Java, MySQL under Grails Framework.
          </p>
        </div>
      </section>
    </div>
    <div className="container column-flex">
      <h3>Web developer </h3>
      <p>
        I'm looking for a Front-end job. I prefer React & typescript related
        tech stack. Five years' experience enables me to set up architecture of
        project from scratch and to tackle problems autonomously.
      </p>
      <Button href={CV} download className="button">
        Get my CV
      </Button>
    </div>
  </div>
);

export default Main;
