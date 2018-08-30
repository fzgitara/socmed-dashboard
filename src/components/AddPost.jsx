import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { POSTS_LIST } from '../store/url/index'

export class AddPost extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      username: '',
      title: '',
      post: ''
    }
  }

  handleSubmit() {
    axios.post(POSTS_LIST, {
      title: this.state.title,
      body: this.state.post
    }).then(resp => {
      alert('Success!')
      this.setState({
        name: '',
        username: '',
        title: '',
        post: ''
      })
      console.log(resp)
    }).catch(err => {
      console.log(err)
    })
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name] : e.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="container" style={{marginTop: 20}} >
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
          </div>
          <input value={this.state.name} name="name" onChange={this.handleChange.bind(this)} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Username</span>
          </div>
          <input value={this.state.username} name="username" onChange={this.handleChange.bind(this)} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="form-group">
          <label style={{float: 'left'}} htmlFor="title">Title:</label>
          <input value={this.state.title} name="title" onChange={this.handleChange.bind(this)} type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label style={{float: 'left'}} htmlFor="post">Post:</label>
          <textarea value={this.state.post} name="post" onChange={this.handleChange.bind(this)} className="form-control" rows="5" id="post"></textarea>
        </div>
        <button style={{float: 'right'}} className="btn btn-success" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
