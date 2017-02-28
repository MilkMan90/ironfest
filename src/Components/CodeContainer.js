import React, { Component } from 'react';
import CodePane from './CodePane';
import '../CodeContainer.css';

class CodeContainer extends Component {
  constructor(){
    super()
    this.state = {
      code: '',
      consoleOutput: []
    }
  }
  componentDidMount(){

  }
  updateCode(newCode) {
    this.props.updateCode(newCode)
      // this.setState({
      //     code: newCode,
      // });
    }
  runCode(){
    // this.props.runCode()
    try {
      const result = eval(this.props.code)
      this.props.updateConsole(result)
    } catch (e) {
      this.props.updateConsole(`${e.name}: ${e.message}`)
    }
  }

  render() {
    return (
      <div className="CodeContainer">
        <h3>Write Functions</h3>
        <CodePane updateCode={(newCode)=>this.updateCode(newCode)} code={this.props.code}/>
        <button className="run-code-button" onClick={()=>this.runCode()}>Run Code Only</button>
      </div>
    );
  }
}

export default CodeContainer;
