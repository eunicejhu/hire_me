import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "../Home";
import "./routes.less";

const Timeline = React.lazy(() => import("../Timeline"));
const Routes: React.FC = () => {
  return (
    <Router>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/timeline">Timeline</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/timeline">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Timeline />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
