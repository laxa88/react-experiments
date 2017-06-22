import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import SampleStandalone from '../standalone'
import SampleRedux from '../redux'

class SampleHashRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>

          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/standalone'>Standalone samples</Link></li>
            <li><Link to='/redux'>Simple Redux</Link></li>
          </ul>

          <Route exact path='/standalone' component={SampleStandalone} />
          <Route exact path='/redux' component={SampleRedux} />

        </div>
      </HashRouter>
    )
  }
}

export default SampleHashRouter