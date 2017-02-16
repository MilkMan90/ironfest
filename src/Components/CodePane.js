import React, { Component } from 'react';
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
    this.props.updateCode(newCode)
  }
  render() {
    var options = {
      lineNumbers: true,
    };
    return (
      <div className="CodePane">
        <CodeMirror mode={this.state.mode} value={this.props.code} onChange={this.updateCode.bind(this)} options={options}/>
      </div>
    );
  }
}

export default CodePane;
