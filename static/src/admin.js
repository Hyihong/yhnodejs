import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from "react-router-dom";
import Divider, { message } from 'antd'
import { requestInterceptor,responseInterceptor } from './utils/axiosInterceptor'
import "normalize.css"
import zhCN from 'antd/lib/locale-provider/zh_CN';
import axios from 'axios' 
import '../node_modules/font-awesome/css/font-awesome.min.css'
//视图
import AdminLayout from './components/admin/share/AdminLayout'
import AdminHome from './pages/admin/AdminHome'
import AddArticle from './pages/admin/AddArticle'
import EditArticle from './pages/admin/EditArticle'
import ArticleIndex from './pages/admin/ArticleIndex'



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
    url:"/api/authCheck"
}).then( response=>{
    if( response.status === 200 && response.data.code === 0){
        ReactDOM.render(
            <Router> 
                    <div>
                        <AdminLayout>
                            <Route exact path="/admin" component={ AdminHome } />
                            <Route exact path="/admin/article/create" component={AddArticle} />
                            <Route exact path="/admin/article/index" component={ArticleIndex} />
                            <Route exact path="/admin/article/edit" component={ EditArticle } />
                        </AdminLayout>
                    </div>
            </Router>,
            appContainer
        );
    }else{
        message.info("发生未知错误，请刷新重试");
    }
})



