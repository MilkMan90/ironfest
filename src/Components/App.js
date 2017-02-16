import React, { Component } from 'react';
import Header from './Header';
import Console from './Console';
import CodeContainer from './CodeContainer';
import TestContainer from './TestContainer';
import '../App.css';
import AuthService from '../utils/AuthService'

const auth = new AuthService('nN29JzO2WI7XO7Ra5L5muICb1NPj5k59', 'pilewski.auth0.com');

class App extends Component {
  constructor(){
    super()
    this.state = {
      mainCode: '',
      testCode: '',
      consoleOutput: []
    }
  }
  updateMainCode(newCode){
    this.setState({
        mainCode: newCode,
    });
  }
  updateTestCode(newCode){
    this.setState({
        testCode: newCode,
    });
  }
  updateConsole(line){
    console.log(line);
    this.setState({
      consoleOutput: this.state.consoleOutput.concat(line)
    })
  }
  render() {
    return (
      <div className="App">
        <Header auth={auth}/>
        <CodeContainer code={this.state.mainCode} updateCode = {(newCode)=>this.updateMainCode(newCode)} updateConsole={(line)=>{this.updateConsole(line)}}/>
        <TestContainer code={this.state.testCode} updateCode = {(newCode)=>this.updateTestCode(newCode)}/>
        <Console consoleLog = {this.state.consoleOutput}/>
      </div>
    );
  }
}

export default App;
