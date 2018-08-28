import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, Switch} from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../store/actions/users'

export class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.props.getUsers()
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      users: nextProps.users
    }
  }

  render() {
    console.log('USERS', this.state.users)
    return (
      <Router>
        <div>
          <h1>USERS</h1>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(home)
