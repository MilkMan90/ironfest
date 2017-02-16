import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Header.css';
import AuthService from '../utils/AuthService'

class Header extends Component {
  render() {
    const { auth } = this.props

    return (
      <header className="Header">
        <h1>IronFest</h1>

        <button onClick={auth.login.bind(this)}>>Log In</button>
      </header>
    );
  }
}

export default Header;
