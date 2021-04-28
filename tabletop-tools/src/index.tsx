import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { CoreReducerManager } from './core/constants';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { GridStack } from 'gridstack';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={CoreReducerManager.store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

GridStack.init();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
