import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Scroll from  'react-scroll';
import ChatView from 'react-chatview'
import '../Console.css';

class Console extends Component {
  scrollToBottom = () => {
      const node = ReactDOM.findDOMNode(this.messagesEnd);
      node.scrollIntoView({behavior: "smooth"});
  }

  componentDidMount() {
      this.scrollToBottom();
  }

  componentDidUpdate() {
      this.scrollToBottom();
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
          <div style={ {float:"left", clear: "both"} }
                ref={(el) => { this.messagesEnd = el; }}></div>
        </ChatView>
    );
  }
}

export default Console;
