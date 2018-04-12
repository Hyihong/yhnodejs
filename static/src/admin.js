import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from "react-router-dom";
import { message } from 'antd'
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

// Add a response interceptor 
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    if( error.toString().slice(-3) === '401' ){
        message.info("检测到您还未进行登录或登录过期，请重新登录");
        setTimeout(()=>{
            window.location.href="/home";
        },1500)
    }
    return Promise.reject(error);
});


    //在此处进行登录跳转控制，token正确则跳转至/admin页面，token错误前端重定向至首页
axios({
    method:"GET",
    url:"/api/loginAuthCheck"
}).then( response=>{
    if( response.status === 200 && response.data.code === 0){
        ReactDOM.render(
            <Router>
                    <div>您已进入后台界面</div>
            </Router>,
            appContainer
        );
    }else{
        message.info("发生未知错误，请刷新重试");
    }
})



