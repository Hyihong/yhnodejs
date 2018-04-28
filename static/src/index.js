import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Row, Col,message } from 'antd'
import { requestInterceptor,responseInterceptor } from './utils/axiosInterceptor'
import "normalize.css"
import Home from './pages/public/Home.jsx'
import Note from './pages/public/Note.jsx'
import IntroduceMysite from './pages/public/IntroduceSite.jsx'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import axios from 'axios' 
import Header from './components/public/share/Header.jsx'
import '../node_modules/font-awesome/css/font-awesome.min.css'
const appContainer = document.getElementById('root');

 //http request 拦截器
 //增加authorization,和 http请求头
 requestInterceptor(axios);

  // http response 拦截器 
  responseInterceptor(axios,(error)=>{
      if( error.toString().slice(-3) === '401' ){
         // message.info("检测到您还未进行登录或登录过期，请重新登录");   
      }
  });


var isAuthed = function(){
   return new Promise( (resolve, reject)=>{
        axios({
          method:"GET",
          url:"/api/authCheck"
        }).then( response=>{
          if( response.status === 200 && response.data.code === 0){
             resolve( true )
          }else{
              message.info("发生未知错误，请刷新重试");
              reject(false) ;
          }
        },error=>{
          resolve(false) ;
        })
   })
}

async function renderIndex(){
       let isAuth = await isAuthed();
         //渲染首页
        ReactDOM.render(
          <Router>
              <div >
                  <Header authed={ isAuth } ></Header>
                  <Route exact path="/home" component={ (props)=> Auth( Home,props) } />
                  <Route exact path="/home/note" component={Note} />
                  <Route exact path="/home/introduce/mysite" component={IntroduceMysite} />
              </div>
          </Router>,
        appContainer
        );
}

  // 前端路由拦截方法
  function Auth( Comp, props){
    return <Comp { ...props }  ></Comp>
  }

  // start
  renderIndex();


