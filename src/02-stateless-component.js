import React from 'react';

// References
// https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
// https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/

// "Stateless" means the component only renders the component.
// The components below only receive data as props and presenting
// those data.

class StatelessComponent extends React.Component {
  render() {
    return (
      <div>
        StatelessComponent : {this.props.myName}!
      </div>
    );
  }
}

const StatelessFunctionalComponent = ({myClass, myName}) => {
  return (
    <div className={myClass}>
      StatelessFunctionalComponent : {myName}!
    </div>
  );
}

export {
  StatelessComponent,
  StatelessFunctionalComponent
};