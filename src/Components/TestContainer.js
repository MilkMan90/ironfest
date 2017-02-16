import React, { Component } from 'react';
import logo from '../logo.svg';
import CodePane from './CodePane';
import '../TestContainer.css';

class TestContainer extends Component {
  constructor(){
    super()
    this.state = {
      code: ''
    }
  }
  updateCode(newCode) {
      this.setState({
          code: newCode,
      });
    }
  runCode(){

  }
  render() {
    return (
      <div className="TestContainer">
        <CodePane updateCode={(newCode)=>this.updateCode(newCode)} code={this.state.code}/>
      </div>
    );
  }
}

export default TestContainer;
