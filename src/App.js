import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Archive from "./components/Archive";
import Trash from "./components/Trash";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/archive">
          <Archive />
        </Route>
        <Route path="/trash">
          <Trash />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
