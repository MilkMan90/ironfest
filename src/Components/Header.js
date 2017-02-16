import React, { Component } from 'react';
import '../Header.css';
import AuthService from '../utils/AuthService'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: ''
    }
  }
  componentDidMount() {
    if (localStorage.profile) {
      let profile = JSON.parse(localStorage.profile)
      this.setState({user: profile})
    }
  }

  render() {
    const { auth } = this.props
    const { user } = this.state

    return (
      <header className="Header">
        <h1>IronFest</h1>

        {user ? user.name
          : <button onClick={auth.login.bind(this)}>>Log In</button>
        }
        {user ? <button onClick={auth.logout.bind(this)}>>Log Out</button> : ''}
      </header>
    );
  }
}

export default Header;
