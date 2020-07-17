import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import MyRouter from './components/MyRouter';
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);