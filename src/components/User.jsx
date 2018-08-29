import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {

  refresh() {
    window.location.reload()
  }

  render() {
    let { user } = this.props
    return (
      <div className="card" style={{margin: 5}}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
          <Link to={{pathname: `/post/${user.id}`, state: {name: user.name} }} className="card-link" onClick={this.refresh} >View Post</Link>
          <Link to={{pathname: `/album/${user.id}`, state: {name: user.name} }} className="card-link" onClick={this.refresh} >View Album</Link>
        </div>
      </div>
    )
  }
}
