import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import App from './app/app';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
