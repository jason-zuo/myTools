import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import App from './App';
import './common/styles/reset.css';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';
import store from './redux/store/store';

FastClick.attach(document.body);

render(
    <Provider store={store}>
         <App />
    </Provider>,
  document.getElementById('app')
);
