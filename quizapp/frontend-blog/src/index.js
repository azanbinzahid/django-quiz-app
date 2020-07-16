import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './components/Router';
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
  ,
  document.getElementById('root')
);