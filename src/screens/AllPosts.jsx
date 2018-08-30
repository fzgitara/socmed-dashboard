import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../store/actions/posts'
import { bindActionCreators } from 'redux'
import images from '../res/images/index'
import PostComponent from '../components/PostComponent'

export class AllPosts extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.props.getPosts(this.props.match.params.userId)
  }

  static getDerivedStateFromProps(props, state) {
    return {
      posts: props.posts.data
    }
  }

  listPost() {
    let result = []
    if(this.props.posts.loading){
      result.push(<img src={images.loading} key={'loading'} alt="loading"/>)
    } else if(this.props.posts.error) {
      result.push(<h3>Error</h3>)
    } else {
      for(let i=this.state.posts.length-1; i>=0; i--){
        result.push(
          <PostComponent post={this.state.posts[i]} key={'post'+i} ></PostComponent>
        )
      }
    }
    return result
  }

  render() {
    return (
      <div>
        <div className="container" >
          <h3 className="pageTitle" >All Posts</h3>
          {this.listPost()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)
