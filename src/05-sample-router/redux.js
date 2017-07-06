import React from 'react'
import { connect } from 'react-redux'
import SampleComponent from '../04-sample-redux/04-component'

/**
 * This demonstrates:
 * 
 * - A user action triggers a dispatch event, which triggers
 * the reducer to create a new state and add it to the store.
 * - When the store is updated, all components' render() are called
 * and updated with the latest store's values.
 * 
 * @class SampleRedux
 * @extends {React.Component}
 */
class SampleRedux extends React.Component {
  render() {
    return (
      <div>
        <SampleComponent
          value={this.props.state.SampleReducer}
          onAdd={() => this.props.dispatch({ type: 'INCREMENT' })}
          onMinus={() => this.props.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    )
  }
}

/**
 * connect() is a quick way to custom-connect properties from the
 * store's state's properties to this component. You can choose to
 * only expose and inject specific properties from "state" into this
 * component's "props", or just chuck the whole "state" into it instead.
 */
export default connect((state)=>{
  return {
    state: state
  }
})(SampleRedux)