import React, { Component } from 'react';
import logo from '../logo.svg';
import CodePane from './CodePane';
import '../TestContainer.css';

class TestContainer extends Component {
  render() {
    return (
      <div className="TestContainer">
        <CodePane />
      </div>
    );
  }
}

export default TestContainer;
