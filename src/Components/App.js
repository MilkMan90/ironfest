import React, { Component } from 'react';
import Header from './Header';
import Console from './Console';
import CodeContainer from './CodeContainer';
import TestContainer from './TestContainer';
// var mocha = require('mocha')
import '../App.css';
import AuthService from '../utils/AuthService'

const auth = new AuthService('nN29JzO2WI7XO7Ra5L5muICb1NPj5k59', 'pilewski.auth0.com');

const fakeTest = `var { assert } = require('chai');

describe('IronFE', function() {
  it('vowel check should return true ALEX', function() {
    assert.equal(true, true)
  })
})
`

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
  runTest(){
    fetch(`/api/newtest`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          main: this.state.mainCode,
          test: this.state.testCode
          // test: fakeTest
        })
    })
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      console.log(res);
    })
  }
  render() {
    // console.log(mocha);
    return (
      <div className="App">
        <Header auth={auth}/>
        <CodeContainer code={this.state.mainCode} updateCode = {(newCode)=>this.updateMainCode(newCode)} updateConsole={(line)=>{this.updateConsole(line)}}/>
        <TestContainer code={this.state.testCode} updateCode = {(newCode)=>this.updateTestCode(newCode)}/>
        <button className="run-test-button" onClick={()=>this.runTest()}>Run Test</button>
        <Console consoleLog = {this.state.consoleOutput}/>
      </div>
    );
  }
}

export default App;
