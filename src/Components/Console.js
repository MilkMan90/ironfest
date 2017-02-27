import React, { Component } from 'react';
import Scroll from  'react-scroll';
import ChatView from 'react-chatview'
import '../Console.css';

class Console extends Component {
  componentWillReceiveProps(){

  }
  componentDidUpdate(){

  }
  render() {
    let consoleOutput;
    if(this.props.consoleLog){
      consoleOutput = this.props.consoleLog.map((line, i)=>{
        const displayClass = `console-output-line ${line.type}`
        return <p className={displayClass} key={i}>{line.text}</p>
      })
    }
    return (
        <ChatView className="Console"
                  flipped={false}
                  scrollLoadThreshold={1000}
                  onInfiniteLoad={()=>{}}>
          {consoleOutput}
        </ChatView>
    );
  }
}

export default Console;
