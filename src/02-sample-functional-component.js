import React from 'react';

const FunctionalComponent = ({myClass, myName}) => {
  return (
    <div className={myClass}>
      Sample Functional Component : {myName}!
    </div>
  );
}

export default FunctionalComponent;