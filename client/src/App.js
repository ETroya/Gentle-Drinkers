import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddBeer from './pages/AddBeer';

function App() {
  return (
    <Router>
      <Route exact path={"/"}>
        <Main />
      </Route>
      <Route exact path={'/addbeer'}>
        <AddBeer/>
      </Route>
    </Router>
  );
}

export default App;
