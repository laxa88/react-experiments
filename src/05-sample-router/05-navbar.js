import React from 'react'
import { Route, Link } from 'react-router-dom'

import SampleStandalone from './05-standalone'
import SampleRedux from './05-redux'

const SampleNavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/standalone'>Standalone samples</Link></li>
        <li><Link to='/simple-redux'>Simple Redux</Link></li>
      </ul>

      <Route exact path='/standalone' component={SampleStandalone} />
      <Route exact path='/simple-redux' component={SampleRedux} />
    </div>
  )
}

export default SampleNavBar