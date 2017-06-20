import React from 'react';
import SampleComponent from './01-sample-component';
import SampleFunctionalComponent from './02-sample-functional-component';
import SampleButton from './03-sample-button';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        Hello World!
        <SampleComponent myName="foo" />
        <SampleFunctionalComponent myClass="foo" myName="bar" />
        <SampleButton className="bar" onClick={()=>{alert("foo!")}}/>
      </div>
    );
  }

}