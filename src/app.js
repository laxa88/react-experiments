import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SampleNavBar from './05-sample-router/05-navbar'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <p>Welcome to the React Experiments project.</p>

          <SampleNavBar />

        </div>
      </BrowserRouter>
    )
  }
}

export default App