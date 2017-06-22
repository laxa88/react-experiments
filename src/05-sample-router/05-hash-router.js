import React from 'react'
import { HashRouter } from 'react-router-dom'

import SampleNavBar from './05-navbar'

class SampleHashRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          
          <p>Welcome to the React Experiments project.</p>
          <p>Note: This page is using HashRouter.</p>

          <SampleNavBar />

        </div>
      </HashRouter>
    )
  }
}

export default SampleHashRouter