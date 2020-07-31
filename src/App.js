import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

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
            napis2
          </Route>
          <Route exact path="/info">
            <Home />
            napis3
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
