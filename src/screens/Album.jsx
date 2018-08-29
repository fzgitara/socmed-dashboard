import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAlbums } from '../store/actions/albums'
import { bindActionCreators } from 'redux'
import '../App.css'
import images from '../res/images/index'

export class Album extends Component {
  constructor() {
    super()
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    this.props.getAlbums(this.props.match.params.userId)
  }

  static getDerivedStateFromProps(props, state) {
    return {
      albums: props.albums.data
    }
  }

  render() {
    let { name } = this.props.location.state
    return (
      <div className="container" >
        <h3 className="pageTitle" >{name}'s Album</h3>
        <div className="album">
          {this.listAlbum()}
        </div>
      </div>
    )
  }

  listAlbum() {
    let result = []
    if(this.props.albums.loading){
      result.push(<img src={images.loading} key={'loading'} alt="loading"/>)
    } else if(this.props.albums.error) {
      result.push(<h3>Error</h3>)
    } else {
      this.state.albums.forEach((album, i) => {
        result.push(
          <Link to={{pathname: `/photos/${album.id}`}} key={'album'+i} >
            <div className="album-list">
              <h5>{album.title}</h5>
            </div>
          </Link>
        )
      })
    }
    return result
  }
}

const mapStateToProps = (state) => ({
  albums: state.albums
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAlbums
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Album)
