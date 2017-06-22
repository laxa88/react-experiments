import React from 'react'
import { Route, Link } from 'react-router-dom'

import SampleStandalone from './05-standalone'
import SampleRedux from './05-redux'
import SampleHashRouter from './05-hash-router'

const SampleNavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/standalone'>Standalone samples</Link></li>
        <li><Link to='/redux'>Simple Redux</Link></li>
        <li><Link to='/hash-router'>Hash Browser</Link></li>
      </ul>

      <Route exact path='/standalone' component={SampleStandalone} />
      <Route exact path='/redux' component={SampleRedux} />
      <Route exact path='/hash-router' component={SampleHashRouter} />
    </div>
  )
}

export default SampleNavBar