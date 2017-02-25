import React, { Component } from 'react';
import '../Console.css';

class Console extends Component {
  render() {
    let consoleOutput;
    if(this.props.consoleLog){
      consoleOutput = this.props.consoleLog.map((line, i)=>{
        return <p key={i}>{line}</p>
      })
    }
    return (
      <div className="Console">
        {consoleOutput}
      </div>
    );
  }
}

export default Console;
