import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage,null)}/>
          <Route exact path="/login" component={Auth(LoginPage,null)}/>
          <Route exact path="/register" component={Auth(RegisterPage,null)}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
