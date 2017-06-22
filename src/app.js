import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SampleContent1 from './05-sample-router/05-content-1';
import SampleContent2 from './05-sample-router/05-content-2';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          Hello World!

          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/foo1'>C1</Link></li>
            <li><Link to='/foo2'>C2</Link></li>
          </ul>

          <Route exact path='/foo1' component={SampleContent1} />
          <Route exact path='/foo2' component={SampleContent2} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App