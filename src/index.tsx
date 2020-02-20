import { enquireScreen } from "enquire-js";
import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";

import Header from "./Header";
import "./static/style";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    enquireScreen((b: boolean) => {
      setIsMobile(!!b);
    });
  });

  return (
    <DocumentTitle title="ZUOQIN HU">
      <div>
        <Header />
        <div className="home-wrapper"></div>
        {/* <Footer /> */}
      </div>
    </DocumentTitle>
  );
};

export default Home;
