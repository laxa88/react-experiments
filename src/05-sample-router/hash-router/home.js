import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import SampleStandalone from '../standalone'
import SampleRedux from '../redux'
import SampleRedux2 from '../redux2'

class SampleHashRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>

          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/standalone'>Standalone samples</Link></li>
            <li><Link to='/redux'>Simple Redux</Link></li>
            <li><Link to='/reduxAppSample'>Redux App Sample</Link></li>
          </ul>

          <Route exact path='/standalone' component={SampleStandalone} />
          <Route exact path='/redux' component={SampleRedux} />
          <Route exact path='/reduxAppSample' component={SampleRedux2} />

        </div>
      </HashRouter>
    )
  }
}

export default SampleHashRouter