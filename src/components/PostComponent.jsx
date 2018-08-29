import React, { Component } from 'react'

export default class PostComponent extends Component {
  render() {
    let { post } = this.props
    return (
      <div className="card" style={{margin: 5}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    )
  }
}
