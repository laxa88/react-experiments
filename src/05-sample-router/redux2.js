import React from 'react'
import { connect } from 'react-redux'
import Button from '../07-sample-redux-2/button'

/**
 * This demonstrates:
 * 
 * - A user action triggers an async action (e.g. downloading JSON data)
 * 
 * @class SampleRedux2
 * @extends {React.Component}
 */
class SampleRedux2 extends React.Component {
  downloadSomething() {
    this.props.dispatch({ type: 'BEGIN_DOWNLOAD' })
  }

  render() {
    return (
      <div>
        <Button
          message={this.props.state.SampleReducer2.message}
          onClick={this.downloadSomething}
        />
      </div>
    )
  }
}


export default connect((state)=>{
  return {
    state: state
  }
})(SampleRedux2)