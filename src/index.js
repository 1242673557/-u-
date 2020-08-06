import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 路由引入
import {HashRouter,BrowserRouter} from "react-router-dom"

// 引入rem
import "./assets/rem"
// 引入rem重置样式表
import "./assets/reset.css"
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
