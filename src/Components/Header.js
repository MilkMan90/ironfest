import React, { Component } from 'react';
import '../Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>IronFest</h1>

        <button>Log In</button>
      </header>
    );
  }
}

export default Header;
