import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);