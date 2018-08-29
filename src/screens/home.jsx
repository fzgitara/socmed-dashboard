import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import { getUsers } from '../store/actions/users'
import images from '../res/images'
import User from '../components/User'

export class Home extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.props.getUsers()
  }
  
  static getDerivedStateFromProps(props, state) {
    return {
      users: props.users.data
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <h3 className="pageTitle" >USERS</h3>
          {this.listUsers()}
        </div>
      </Router>
    )
  }

  listUsers() {
    let result = []
    if(this.props.users.loading){
      result.push(<img src={images.loading} key={'loading'} alt="loading"/>)
    } else if(this.props.users.error) {
      result.push(<h3>Error</h3>)
    } else {
      this.state.users.forEach((user, i) => {
        result.push(
          <User user={user} key={'user'+i} />
        )
      })
    }
    return result
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUsers
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
