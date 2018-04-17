import React,{Component} from 'react' 
import axios from 'axios' 
import { BrowserRouter as Router,Route } from "react-router-dom";
import { view as LoginModal } from "../../components/login"

import "./style.less"

class Header extends Component{
    constructor(props){
        super(props)
        
        this.state={
            //登录
            loginModalVisible:false,
        }
    }
    componentWillReceiveProps(nextStates,nextProps){

    }
    //显示登录框
    showLoginModal=()=>{
        this.setState({
            loginModalVisible:!this.state.loginModalVisible
        })
    }
  
    render(){

       return  (
           <div>
               {/* 登录框 */}
               <LoginModal visible= { this.state.loginModalVisible } onCancel={  this.showLoginModal } ></LoginModal>
               {/* 页面头部 */}
               <div className="yh-nav">
                    {
                        this.props.authed ? 
                        <div>
                            <a href="/admin"><span onClick = {this.loginout }><i className="fa fa-arrow-circle-right"></i>您已登录，由此进入管理后台</span></a>
                            <span onClick = {this.loginout }><i className="fa fa-arrow-circle-right"></i>退出</span>
                        </div>
                        : 
                        <span onClick = {this.showLoginModal }><i className="fa fa-arrow-circle-right"></i>管理员登录</span> 
                    }
                     
                     
               </div>
           </div>
           
        )  
          
    }
}



export default Header ;