import React from "react";

import { Button, Icon } from "antd";

const Main: React.FC = () => (
  <div className="main">
    <div className="container">
      <h2>
        We conduct experiments that
        <br></br>
        may or may not seriously
        <br></br>
        break the universe
      </h2>
    </div>
    <div className="feature-container">
      <section className="feature flex">
        <div className="flex-item icon-container">
          <Icon type="wifi" className="icon"></Icon>
        </div>

        <div className="content flex-item">
          <h3>The First Thing</h3>
          <p>
            Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur
            tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam
            vivamus eget. Nunc nibh morbi quis fusce lacus.
          </p>
        </div>
      </section>
      <section className="feature flex reverse">
        <div className="flex-item icon-container">
          <Icon type="code" className="icon"></Icon>
        </div>
        <div className="content flex-item">
          <h3>The Second Thing</h3>
          <p>
            Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur
            tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam
            vivamus eget. Nunc nibh morbi quis fusce lacus.
          </p>
        </div>
      </section>
      <section className="feature flex">
        <div className="flex-item icon-container">
          <Icon type="book" className="icon"></Icon>
        </div>
        <div className="content flex-item">
          <h3>The Third Thing</h3>
          <p>
            Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur
            tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam
            vivamus eget. Nunc nibh morbi quis fusce lacus.
          </p>
        </div>
      </section>
    </div>
    <div className="container footer">
      <h3>Get shady with science</h3>
      <p>
        Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur
        tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus.
      </p>
      <Button href="#" className="button">
        Join our crew
      </Button>
    </div>
  </div>
);

export default Main;
