import React, { Component } from 'react';
import CodePane from './CodePane';
import '../CodeContainer.css';


class CodeContainer extends Component {
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
      <div className="CodeContainer">
        <CodePane updateCode={(newCode)=>this.updateCode(newCode)} code={this.state.code}/>
      </div>
    );
  }
}

export default CodeContainer;
