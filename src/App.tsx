import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.BROWSE} component={Home} />
      <Route exact path={ROUTES.SIGN_IN} component={Home} />
      <Route exact path={ROUTES.SIGN_UP} component={Home} />
    </Router>
  );
}
