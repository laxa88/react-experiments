import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import SampleStandalone from '../standalone'
import SampleRedux from '../redux'

class SampleBrowserRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/standalone'>Standalone samples</Link></li>
            <li><Link to='/redux'>Simple Redux</Link></li>
            <li><Link to='/hash-router'>Hash Browser</Link></li>
          </ul>

          <Route exact path='/standalone' component={SampleStandalone} />
          <Route exact path='/redux' component={SampleRedux} />

        </div>
      </BrowserRouter>
    )
  }
}

export default SampleBrowserRouter