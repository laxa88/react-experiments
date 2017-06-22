import React from 'react'
import { connect } from 'react-redux'
import SampleComponent from '../04-sample-redux/04-component'

class SampleRedux extends React.Component {
  render() {
    return (
      <div>
        <SampleComponent
          value={this.props.state}
          onAdd={() => this.props.dispatch({ type: 'INCREMENT' })}
          onMinus={() => this.props.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    )
  }
}

export default connect((state)=>{
  return {
    state: state
  }
})(SampleRedux)