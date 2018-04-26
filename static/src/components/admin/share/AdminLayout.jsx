

import React,{Component} from 'react' 
import axios from 'axios' 
import { BrowserRouter as Router,Route } from "react-router-dom";
import "./style.less"


class AdminLayout extends Component{
    constructor(props){
        super(props)
    }

    loginOut(){
        localStorage.removeItem("token");	
        window.location='/home'
    }  
    render(){
       return  (
           <div className="yh-admin-layout">
                    <div className="yh-admin-header" >
                      <a href="/home"><span className="yh-admin-nav-span">首页</span></a>
                      <span className="yh-admin-nav-span" onClick ={this.loginOut }>退出系统</span>
                    </div>
                 <div className="yh-admin-layout-base">
                      { this.props.children }
                 </div>
           </div>
           
           
        )  
       
          
    }
}



export default AdminLayout ;