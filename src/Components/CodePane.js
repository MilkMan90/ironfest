import React, { Component } from 'react';
import logo from '../logo.svg';
import CodeMirror from 'react-codemirror';
import '../CodePane.css';
import '../../node_modules/codemirror/lib/codemirror.css';


class CodePane extends Component {
  constructor(){
    super();
    this.state = {
      code: 'Code',
      mode: 'javascript'
    }
  }
  updateCode(newCode) {
    this.setState({
        code: newCode,
    });
  }
  render() {
    var options = {
      lineNumbers: true,
    };
    return (
      <div className="CodePane">
        <CodeMirror mode={this.state.mode} value={this.state.code} onChange={()=>this.updateCode()} options={options}/>
      </div>
    );
  }
}

export default CodePane;
