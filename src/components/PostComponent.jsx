import React, { Component } from 'react'
import '../App.css'
import Comments from './Comments'

export default class PostComponent extends Component {
  constructor() {
    super()
    this.state = {
      commentsIsActive: false,
      comments: []
    }
  }

  comments(postId) {
    if(this.state.commentsIsActive) {
      return (
        <Comments postId={postId}/>
      )
    }
  }

  commentsActivate() {
    this.setState({
      commentsIsActive: !this.state.commentsIsActive
    })
  }

  render() {
    let { post } = this.props
    return (
      <div>
        <div className="card rounded-0" style={{marginTop: 10}} >
          <div className="card-header rounded-0">
            <h5 className="card-title">{post.title}</h5>
          </div>
          <div className="card-body">
            <p className="card-text" style={{textAlign: 'left'}} >{post.body}</p>
            <div style={{float: 'right'}} >
              {
                this.state.commentsIsActive ?
                <button onClick={this.commentsActivate.bind(this)} className="btn btn-secondary">Close Comments</button> :
                <button onClick={this.commentsActivate.bind(this)} className="btn btn-primary">View Comments</button>
              }
            </div>
          </div>
        </div>
        {this.comments(post.id)}
      </div>
    )
  }
}
