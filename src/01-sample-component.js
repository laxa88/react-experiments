import React from 'react';

export default class SampleComponent extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Sample Component : {this.props.myName}!
      </div>
    );
  }

}