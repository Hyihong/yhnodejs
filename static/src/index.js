import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Row, Col } from 'antd'
import "normalize.css"
import Home from './pages/public/Home.jsx'
import Note from './pages/public/Note.jsx'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import axios from 'axios' 


const appContainer = document.getElementById('root');

 //http request 拦截器
 //增加authorization,和 http请求头

 axios.interceptors.request.use(
  config => {
    config.headers.common['X-Requested-With'] = 'XMLHttpRequest' ;
    const token = localStorage.getItem('token');
    if (token) {
      // Bearer是JWT的认证头部信息
      config.headers.common['Authorization'] = 'Bearer '+ token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


ReactDOM.render(
    <Router>
         <div>
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/note" component={Note} />
         </div>
    </Router>,
  appContainer
);