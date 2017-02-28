import React, { Component } from 'react';
import CodePane from './CodePane';
import Dropdown from 'react-dropdown'
import AssertCode from '../utils/assertSyntax'
import ReactTooltip from 'react-tooltip'
import '../TestContainer.css';

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

  }
  render() {
    console.log(AssertCode);
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
                <ReactTooltip id={`${assert.name}`}>
                  <div>{assert.desc}</div>
                  <div>{assert.doc}</div>
                  <div>{assert.code}</div>
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
