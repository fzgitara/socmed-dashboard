import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import home from './screens/home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Social Media Dashboard</h1>
          </header>
          <Switch>
            <Route exact path="/" component={ home } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
