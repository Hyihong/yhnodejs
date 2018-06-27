import React,{Component} from 'react' 
import axios from 'axios' 
import { Link,withRouter } from "react-router-dom";
import { view as LoginModal } from "../login"

import "./style.less"

class IndexLayout extends Component{
    constructor(props){
        super(props)
        this.state={
            //登录
            loginModalVisible:false,
        }
        this.pathname = this.props.location.pathname;
    }
    componentWillUpdate(nextProps){
        this.pathname = nextProps.location.pathname;
    }
    //显示登录框
    showLoginModal=()=>{
        this.setState({
            loginModalVisible:!this.state.loginModalVisible
        })
    }

    loginOut =()=>{
        localStorage.removeItem("token");	
        window.location.reload();
    }
  
    render(){
       console.log(this.pathname)
       return  (
           <div>
               {/* 登录框 */}
               <LoginModal visible= { this.state.loginModalVisible } onCancel={  this.showLoginModal } ></LoginModal>
              
               {/* 页面头部 */}
               <div className="yh-index-nav">
                    {
                        this.pathname === '/home' ?  null : 
                        <div className="yh-router-guide">
                         <Link to="/home">HOME</Link>
                         <Link to="/home/article/list">ARTICLES</Link>
                         <Link to="/home/aboutme">ABOUTME</Link>
                         <Link to="/home">GALLERY</Link>
                         <Link to="/home">WEBSITE</Link>
                         
                    </div>
                    }
                   
                    {
                        this.props.authed ? 
                        <div className="yh-admin-guide">
                            <a href="/admin"><span><i className="fa fa-arrow-circle-right"></i>进入管理后台</span></a>
                            <span onClick = { this.loginOut }><i className="fa fa-arrow-circle-right"></i>退出</span>
                        </div>
                        : 
                        <div className="yh-admin-guide">
                            <Link to="/home"><i className="fa fa-home"></i>首页</Link>
                            <span onClick = {this.showLoginModal }><i className="fa fa-arrow-circle-right"></i>管理员登录</span> 
                        </div>
                        
                    }
            
                     
               </div>
               <div className="yh-index-containter">
                    { this.props.children }
               </div>
              
           </div>
           
        )  
          
    }
}



export default withRouter(IndexLayout) ;