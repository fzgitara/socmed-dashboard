import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home'
import Post from './screens/Post'
import Album from './screens/Album'
import Photos from './screens/Photos'

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
            <Route exact path="/" component={ Home } />
            <Route path="/post/:userId" component={ Post } />
            <Route path="/album/:userId" component={ Album } />
            <Route path="/photos/:userId/:albumId" component={ Photos } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
