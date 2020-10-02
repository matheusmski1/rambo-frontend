import SignIn from "modules/Auth/SignIn";
import SignUp from "modules/Auth/SignUp";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpSuccess from "modules/Auth/SignUpSuccess/";
import Recovery from "modules/Auth/Recovery";
import RecoveryAuth from "modules/Auth/RecoveryAuth";
import RecoveryAuthSuccess from "modules/Auth/RecoveryAuthSuccess";
import UserHome from "modules/MainUserPage/UserHome";

const MainRoutes = () => (
  <Router>
    <Route path="/auth/sign-in" component={SignIn} />
    <Route path="/auth/sign-up" component={SignUp} />
    <Route path="/auth/sign-upsuccess" component={SignUpSuccess} />
    <Route path="/auth/recovery" component={Recovery} />
    <Route path="/auth/recoveryAuth" component={RecoveryAuth} />
    <Route path="/auth/recoveryAuthSuccess" component={RecoveryAuthSuccess} />
    <Route path="/Home" component={UserHome} />
  </Router>
);

export default MainRoutes;
