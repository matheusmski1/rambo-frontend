import SignIn from "modules/Auth/SignIn";
import SignUp from "modules/Auth/SignUp";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const MainRoutes = () => (
  <Router>
    <Route path="/auth/sign-in" component={SignIn} />
    <Route path="/auth/sign-up" component={SignUp} />
  </Router>
);

export default MainRoutes;
