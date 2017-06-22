import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SampleBrowserRouter from './05-sample-router/browser-router/home'
import SampleHashRouter from './05-sample-router/hash-router/home'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <p>Welcome to the React Experiments project.</p>

          <SampleBrowserRouter />

          <hr />

          <SampleHashRouter />

        </div>
      </BrowserRouter>
    )
  }
}

export default App