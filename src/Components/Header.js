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
        <h1><span className="iron">Iron</span><span className="f">F</span><span className="e">e</span><span className="s">s</span><span className="t">t</span></h1>

        <div className="login">
          {user ? <span className="user-name">{user.name}</span>
            : <button onClick={auth.login.bind(this)}>Log In</button>
          }
          {user ? <button onClick={auth.logout.bind(this)}>Log Out</button> : ''}
        </div>
      </header>
    );
  }
}

export default Header;
