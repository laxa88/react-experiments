import React from 'react';
import SampleComponent from './01-sample-component';
import {StatelessComponent,StatelessFunctionalComponent} from './02-stateless-component';
import SampleButton from './03-sample-button';
import * as SampleRedux from './04-sample-redux';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">

        Hello World!

        <SampleComponent myName="foo" />

        <StatelessComponent myClass="foo" myName="bar" />
        <StatelessFunctionalComponent myClass="foo" myName="bar" />

        <SampleButton className="bar" onClick={()=>{alert("foo!")}}/>

        <SampleRedux.SampleComponent

        />

      </div>
    );
  }
}