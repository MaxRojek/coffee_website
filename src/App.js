import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Example from "./Components/Navbar";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Example />
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <Home />
          </Route>
          <Route exact path="/info">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
