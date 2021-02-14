import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import Dice from "./Pages/DIceGame";
import Timer from "./Pages/Timer";
import Timerclass from "./Pages/TImerClass";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/timerclass">
            <Timerclass />
          </Route>

          <Route path="/timer">
            <Timer />
          </Route>

          <Route path="/dice">
            <Dice />
          </Route>

          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
