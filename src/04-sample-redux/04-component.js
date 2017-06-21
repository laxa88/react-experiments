import React from 'react';

export default class SampleComponent extends React.Component {
  render() {
    return (
      <p>
        Clicked: {this.props.value} times
        <button onClick={this.props.onAdd}>+</button>
        <button onClick={this.props.onMinus}>-</button>
      </p>
    );
  }
}