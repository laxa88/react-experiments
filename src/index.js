import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import { SampleReducer } from './04-sample-redux';
import SampleReducer2 from './07-sample-redux-2/reducer';

// When there's more than one reducer, combine them
// before passing it to createStore()
const allReducers = combineReducers({
  SampleReducer,
  SampleReducer2
})

// the 2nd parameter below is only required if you want
// to view the redux store via chrome plugin.
const sampleStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={sampleStore}>
    <App />
  </Provider>
  , document.getElementById('root')
)