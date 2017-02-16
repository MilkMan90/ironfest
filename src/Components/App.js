import React, { Component } from 'react';
import Header from './Header';
import CodeContainer from './CodeContainer';
import TestContainer from './TestContainer';
import '../App.css';
import AuthService from '../utils/AuthService'

const auth = new AuthService('nN29JzO2WI7XO7Ra5L5muICb1NPj5k59', 'pilewski.auth0.com');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header auth={auth}/>
        <CodeContainer/>
        <TestContainer/>
      </div>
    );
  }
}

export default App;
