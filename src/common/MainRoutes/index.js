import SignIn from "modules/Auth/SignIn";
import SignUp from "modules/Auth/SignUp";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpSuccess from "modules/Auth/SignUpSuccess/";
import Recovery from "modules/Auth/Recovery";
import RecoveryAuth from "modules/Auth/RecoveryAuth";
import RecoveryAuthSuccess from "modules/Auth/RecoveryAuthSuccess";
import UserHome from "modules/MainUserPage/UserHome";
import InstitutionPage from "modules/MainUserPage/InstitutionPage";

const MainRoutes = () => (
  <Router>
    <Route path="/auth/sign-in" component={SignIn} />
    <Route path="/auth/sign-up" component={SignUp} />
    <Route path="/auth/sign-up-success" component={SignUpSuccess} />
    <Route path="/auth/recovery" component={Recovery} />
    <Route path="/auth/recovery-auth" component={RecoveryAuth} />
    <Route path="/auth/recovery-auth-success" component={RecoveryAuthSuccess} />
    <Route path="/home" component={UserHome} />
    <Route path="/institution" component={InstitutionPage} />
  </Router>
);

export default MainRoutes;
