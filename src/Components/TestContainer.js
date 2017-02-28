import React, { Component } from 'react';
import CodePane from './CodePane';
import AssertCode from '../utils/assertSyntax'
import ReactTooltip from 'react-tooltip'
import '../styles/TestContainer.css';

class TestContainer extends Component {
  constructor(){
    super()
    this.state = {
      code: '',
      showAsserts: false
    }
  }
  updateCode(newCode) {
      this.props.updateCode(newCode)
    }
  toggleShowAssertOptions(){
    this.setState({
      showAsserts: !this.state.showAsserts
    })
  }
  handleAddAssertion(assertType){
    const code = this.findCode(assertType)
    const newCode = this.props.code + '\n' + code
    this.updateCode(newCode)
    this.toggleShowAssertOptions()
  }
  findCode(assertType){
    const assertObj = AssertCode.find((assert)=>{
      return assert.name === assertType
    })
    return assertObj.code
  }
  render() {
    let assertOptions;
    if(this.state.showAsserts){
    const assertButtonArray = AssertCode.map((assert, i)=>{
      return <div
                className="assert-item"
                key={i}>
                <button
                  className="assert-button"
                  onClick={()=>{this.handleAddAssertion(`${assert.name}`)}}
                  data-tip
                  data-for={`${assert.name}`}
                >
                  {assert.name}
                </button>
                <ReactTooltip
                  type='info'
                  id={`${assert.name}`}
                >
                    <div className="tooltip-div name">{assert.name}</div>
                    <div className="tooltip-div">{assert.desc}</div>
                    <div className="tooltip-div">{assert.doc}</div>
                    <div className="tooltip-div">Code: {assert.code}</div>
                </ReactTooltip>
            </div>
    })
    assertOptions =(
      <div className="assert-options-pane">
        {assertButtonArray}
      </div>)
    }
    return (
      <div className="TestContainer">
        <h3>
          Write Tests
            <button
              className='add-asserts-button'
              onClick={()=>{this.toggleShowAssertOptions()}}
            >
              Add Assertions
            </button>
        </h3>
        {assertOptions}
        <CodePane updateCode={(newCode)=>this.updateCode(newCode)} code={this.props.code}/>
      </div>
    );
  }
}

export default TestContainer;
