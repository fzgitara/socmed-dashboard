import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPhotos } from '../store/actions/photos'
import '../App.css'

export class Photos extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    const { userId, albumId } = this.props.match.params
    this.props.getPhotos(userId, albumId)
    console.log(this)
  }

  render() {
    return (
      <div>
        <h3 className="pageTitle" >Photos</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPhotos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
