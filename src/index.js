import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import visibilityFilters from './reducers/visibilityFilters';
import App from './App';

import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(
  visibilityFilters,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);


serviceWorker.register();
