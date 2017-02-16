import React, { Component } from 'react';
import logo from '../logo.svg';
import CodePane from './CodePane';
import '../CodeContainer.css';


class CodeContainer extends Component {
  render() {
    return (
      <div className="CodeContainer">
        <CodePane />
      </div>
    );
  }
}

export default CodeContainer;
