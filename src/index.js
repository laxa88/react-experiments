import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { SampleReducer } from './04-sample-redux';

const sampleStore = createStore(
    SampleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={sampleStore}>
    <App />
  </Provider>
  , document.getElementById('root')
);