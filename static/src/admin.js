import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from "react-router-dom";
import { message } from 'antd'
import { requestInterceptor,responseInterceptor } from './utils/axiosInterceptor'
import "normalize.css"
import zhCN from 'antd/lib/locale-provider/zh_CN';
import axios from 'axios' 


const appContainer = document.getElementById('root');

 //http request 拦截器
 //增加authorization,和 http请求头
 requestInterceptor(axios);

// http response 拦截器 
responseInterceptor(axios,(error)=>{
    if( error.toString().slice(-3) === '401' ){
        message.info("检测到您还未进行登录或登录过期，请重新登录");
        setTimeout(()=>{
            window.location.href="/home";
        },1500)
    }
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



