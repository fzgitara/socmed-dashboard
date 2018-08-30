import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './screens/Home'
import Post from './screens/Post'
import Album from './screens/Album'
import Photos from './screens/Photos'
import AddPost from './components/AddPost'
import AllPosts from './screens/AllPosts'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Social Media Dashboard</h1>
            <Link to={{pathname: "/allPosts"}} >
              <button className="btn btn-info" style={{float: 'right', marginLeft: 10}} >View All Posts</button>
            </Link>
            <Link to={{pathname: "/addPost"}} >
              <button className="btn btn-info" style={{float: 'right'}} >Add Post</button>
            </Link>
          </header>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/post/:userId" component={ Post } />
            <Route path="/album/:userId" component={ Album } />
            <Route path="/photos/:albumId" component={ Photos } />
            <Route path="/addPost" component={ AddPost } />
            <Route path="/allPosts" component={ AllPosts } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
