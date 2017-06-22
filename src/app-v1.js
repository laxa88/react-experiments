import React from 'react';
import * as ReactRedux from 'react-redux';
import Router from 'react-router';

import SampleComponent from './01-sample-component';
import {StatelessComponent,StatelessFunctionalComponent} from './02-stateless-component';
import SampleButton from './03-sample-button';
import * as SampleRedux from './04-sample-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        Hello World!

        <SampleComponent myName="foo" />

        <StatelessComponent myClass="foo" myName="bar" />
        <StatelessFunctionalComponent myClass="foo" myName="bar" />

        <SampleButton className="bar" onClick={()=>{alert("foo!")}}/>

        <SampleRedux.SampleComponent
          value={this.props.state}
          onAdd={() => this.props.dispatch({ type: 'INCREMENT' })}
          onMinus={() => this.props.dispatch({ type: 'DECREMENT' })}
        />

      </div>
    );
  }
}

export default ReactRedux.connect((state)=>{
  return {
    state: state
  }
})(App);