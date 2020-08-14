import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Bank from "./components/Bank";
import Table from "./components/Table"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Bank />
      </div>
    </Router>
  );
}

export default App;
