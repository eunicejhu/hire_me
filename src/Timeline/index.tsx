import React from "react";
import "../static/style.timeline";

const Timeline: React.FC = () => {
  return (
    <div className="timeline">
      <ul>
        <li>
          <div className="content">
            <h3>Sign up!</h3>
            <p>Sign up to our Affiliate program.</p>
          </div>
          <div className="step">Step one</div>
        </li>
        <li>
          <div className="content">
            <h3>Get approved</h3>
            <p>
              Once approved, you will get a <b>Unique Link</b>. Share it on your
              social media platforms & any other promotional outlets.
            </p>
          </div>
          <div className="step">Step two</div>
        </li>
        <li>
          <div className="content">
            <h3>How much do I get paid?</h3>
            <p>
              Recieve <span>5-20% </span> commission on all sales that your{" "}
              <b>Unique Link</b> generates.
            </p>
          </div>
          <div className="step">Step three</div>
        </li>
        <li>
          <div className="content">
            <h3>Get paid!</h3>
            <p>
              Check your earned commission through our{" "}
              <b>
                <a href=""></a>Affiliate Program
              </b>{" "}
              portal.{" "}
            </p>
          </div>
          <div className="step">Step four</div>
        </li>
        <div style={{ clear: "both" }} />
      </ul>
    </div>
  );
};

export default Timeline;
