import React, { Component } from 'react'

export default class PhotoComponent extends Component {
  render() {
    let { photo } = this.props
    return (
      <div className="card" style={{width: '13rem', margin: 2}}>
        <a href={photo.url}>
          <img className="card-img-top" src={photo.thumbnailUrl} alt="thumb" />
        </a>
        <div className="card-body">
          <p className="card-text">{photo.title}</p>
        </div>
      </div>
    )
  }
}
