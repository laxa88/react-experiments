import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
        <button onClick={this.props.onClick}>Click Me</button>
      </div>
    );
  }
}