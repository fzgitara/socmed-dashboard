import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getComments } from '../store/actions/comments'
import images from '../res/images/index'

export class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.props.getComments(this.props.postId)
  }

  static getDerivedStateFromProps(props, state) {
    return {
      comments: props.comments.data
    }
  }

  listComment() {
    let result = []
    if(this.state.comments.length === 0 && this.props.comments.loading){
      result.push(<img src={images.loading} key={'loading'} alt="loading"/>)
    } else if(this.state.comments.length === 0 && this.props.comments.error) {
      result.push(<h3>Error</h3>)
    } else {
      this.state.comments.forEach((comment, i) => {
        result.push(
          <div className="card rounded-0 border-top-0" key={'comment'+i}>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{comment.body}</p>
                <footer className="blockquote-footer">{comment.name}<cite title="Source Title">{comment.email}</cite></footer>
              </blockquote>
            </div>
          </div>
        )
      })
    }
    return result
  }

  render() {
    return (
      this.listComment()
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getComments
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
