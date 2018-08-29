import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPhotos } from '../store/actions/photos'
import '../App.css'
import images from '../res/images/index'
import PhotoComponent from '../components/PhotoComponent'

export class Photos extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    const { albumId } = this.props.match.params
    this.props.getPhotos(albumId)
  }

  static getDerivedStateFromProps(props, state) {
    return {
      photos: props.photos.data
    }
  }

  render() {
    return (
      <div className="container">
        <h3 className="pageTitle" >Photos</h3>
        <div className="album">
          {this.listPhotos()}
        </div>
      </div>
    )
  }

  listPhotos() {
    let result = []
    if(this.props.photos.loading){
      result.push(<img src={images.loading} key={'loading'} alt="loading"/>)
    } else if(this.props.photos.error) {
      result.push(<h3>Error</h3>)
    } else {
      this.state.photos.forEach((photo, i) => {
        result.push(
          <PhotoComponent photo={photo} key={'photo'+i} />
        )
      })
    }
    return result
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPhotos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
