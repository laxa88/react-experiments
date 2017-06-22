import React from 'react'
import SampleComponent from '../01-sample-component'
import { StatelessComponent, StatelessFunctionalComponent } from '../02-stateless-component'
import SampleButton from '../03-sample-button'

const SampleStandalone = () => {
  return (
    <div>
      <p>Hello World!</p>

      <SampleComponent myName="foo" />

      <StatelessComponent myClass="foo" myName="bar" />

      <StatelessFunctionalComponent myClass="foo" myName="bar" />
      
      <SampleButton className="bar" onClick={()=>{alert("foo!")}}/>
    </div>
  )
}

export default SampleStandalone