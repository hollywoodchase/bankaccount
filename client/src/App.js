import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Bank from "./components/Bank";
import Transactions from "./components/Transactions";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/">
          <Bank />
        </Route>
        <Route exact path="/transactions">
          <Transactions />
        </Route>
      </div>
    </Router>
  );
}

export default App;
