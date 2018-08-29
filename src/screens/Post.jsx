import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import { getPosts } from '../store/actions/posts'
import images from '../res/images/index'
import PostComponent from '../components/PostComponent'

export class Post extends Component {
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

  render() {
    let { name } = this.props.location.state
    return (
      <div className="container" >
        <h3 className="pageTitle" >{name}'s Posts</h3>
        {this.listPost()}
      </div>
    )
  }

  listPost() {
    let result = []
    if(this.props.posts.loading){
      result.push(<img src={images.loading} key={'loading'} alt="loading"/>)
    } else if(this.props.posts.error) {
      result.push(<h3>Error</h3>)
    } else {
      this.state.posts.forEach((post, i) => {
        result.push(
          <PostComponent post={post} key={'post'+i} ></PostComponent>
        )
      })
    }
    return result
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
