import React, { Component } from 'react';
import Header from './Header';
import Console from './Console';
import CodeContainer from './CodeContainer';
import TestContainer from './TestContainer';
// var mocha = require('mocha')
import '../styles/App.css';
import AuthService from '../utils/AuthService'
import ConsoleLine from '../utils/ConsoleLine'

const auth = new AuthService('nN29JzO2WI7XO7Ra5L5muICb1NPj5k59', 'pilewski.auth0.com');

const fakeTest = `var { assert } = require('chai');

describe('IronFE', function() {
  it('vowel check should return true ALEX', function() {
    assert.equal(true, true)
  })
})
`

var test = '';
class App extends Component {
  constructor(){
    super()
    this.state = {
      mainCode: `function example(){
	return 'taylor rocks'
}`,
      testCode: `describe('Example Test', function() {
  it('should be a function', function() {
    assert.isFunction(example)
  })
  it('should return taylor rocks', function() {
    assert.equal(example(), 'taylor rocks')
  })
})`,
      consoleOutput: [],
      consolelog: '',
    }
  }
  componentDidMount(){

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
    const output = new ConsoleLine(line, 'error')
    this.setState({
      consoleOutput: this.state.consoleOutput.concat(output)
    })
  }
  runMainCode(){
    try {
      const result = eval(this.state.mainCode)
      return true;
    } catch (e) {
      this.updateConsole(`${e.name}: ${e.message}`)
      return false;
    }
  }
  runTest(){
    if(this.runMainCode()){
      fetch(`/api/newtest`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          main: this.state.mainCode,
          test: this.state.testCode
        })
      })
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        this.updateConsole(res)
      })
    }
  }
  updateConsole(message){
    if(!message.hasOwnProperty('error')){
      this.pushResultIntoConsole(message)
    } else{
      this.pushErrorIntoConsole(message.error)
    }
  }
  passEvalToConsole(line){
    const output = new ConsoleLine(line, 'code')
    this.setState({
      consoleOutput: this.state.consoleOutput.concat([output])
    })
  }
  pushResultIntoConsole(resultArray){
    resultArray.forEach((test)=>{
      let resultString = `${test.title} - ${test.state} `
      let state = 'pass'
      if(test.state === 'failed'){
        resultString = resultString + ` | ${test.error.name} ${test.error.message}`
        state = 'error'
      }
      const output = new ConsoleLine(resultString, state)
      this.setState({
        consoleOutput: this.state.consoleOutput.concat(output)
      })
    })
  }
  pushErrorIntoConsole(error){
    const output = new ConsoleLine(error, 'error')
    this.setState({
      consoleOutput: this.state.consoleOutput.concat(output)
    })
  }
  clearConsole(){
    this.setState({
      consoleOutput: []
    })
  }
  render() {
    return (
      <div className="App">
        <Header auth={auth}/>
        <CodeContainer code={this.state.mainCode} updateCode = {(newCode)=>this.updateMainCode(newCode)} updateConsole={(line)=>{this.passEvalToConsole(line)}}/>
        <TestContainer code={this.state.testCode} updateCode = {(newCode)=>this.updateTestCode(newCode)}/>
        <button className="run-test-button" onClick={()=>this.runTest()}>Run Test</button>
        <button className="clear-console-button" onClick={()=>this.clearConsole()}>Clear Console</button>
        <Console consoleLog = {this.state.consoleOutput}/>
      </div>
    );
  }
}

export default App;
