import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import CodeContainer from './CodeContainer';
import TestContainer from './TestContainer';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CodeContainer/>
        <TestContainer/>
      </div>
    );
  }
}

export default App;
