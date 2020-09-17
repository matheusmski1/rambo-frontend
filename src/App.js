import React from "react";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route component={Login} path="/home" />
        <Route component={Register} path="/register" />
      </BrowserRouter>
    </>
  );
}

export default App;
