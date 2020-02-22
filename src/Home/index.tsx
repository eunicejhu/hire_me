import { enquireScreen } from "enquire-js";
import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";

import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

import "../static/style";

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
        <Main />
        <Footer />
      </div>
    </DocumentTitle>
  );
};

export default Home;
