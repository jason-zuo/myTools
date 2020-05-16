import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import './common/styles/reset.scss';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';
import store from './redux/store/store';
import MyRouter from './router';

FastClick.attach(document.body);

render(
  <Provider store={store}>
    <MyRouter />
  </Provider>,
  document.getElementById('app')
);
