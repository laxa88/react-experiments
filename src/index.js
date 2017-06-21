import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux';

import { SampleReducer } from './04-sample-redux';

// the 2nd parameter below is only required if you want
// to view the redux store via chrome plugin.
const sampleStore = createStore(
  SampleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <App />
  , document.getElementById('root')
);