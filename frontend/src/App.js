import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CoinList from "./components/coin-list.component"
import CoinChart from "./components/coin-chart.component"

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} width="30" height="30" alt="React Logo" />
            </a>
          </nav>
          <br />
          <Route path="/" exact component={CoinList}/>
          <Route path="/coins/:id/charts" exact component={CoinChart}/>
        </div>
      </Router>
    )
  }
}

export default App;
