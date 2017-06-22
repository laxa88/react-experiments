import React from 'react'

import SampleBrowserRouter from './05-sample-router/browser-router/home'
import SampleHashRouter from './05-sample-router/hash-router/home'

class App extends React.Component {
  render() {
    return (
        <div>

          <p>Welcome to the React Experiments project.</p>

          <SampleBrowserRouter />

          <hr />

          <SampleHashRouter />

        </div>
    )
  }
}

export default App