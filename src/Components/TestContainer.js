import React, { Component } from 'react';
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
      // this.setState({
      //     code: newCode,
      // });
      this.props.updateCode(newCode)
    }

  render() {
    return (
      <div className="TestContainer">
        <h3>Write Tests</h3>
        <CodePane updateCode={(newCode)=>this.updateCode(newCode)} code={this.props.code}/>
      </div>
    );
  }
}

export default TestContainer;
