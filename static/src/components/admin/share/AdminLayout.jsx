

import React,{Component} from 'react' 
import axios from 'axios' 
import { BrowserRouter as Router,Route } from "react-router-dom";
import "./style.less"


const exitStyle={
    color:"#fff",
    marginRight:"10px",
    cursor:"pointer",
}
class AdminLayout extends Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(nextStates,nextProps){

    }  
    render(){
       return  (
           <div>
                    <div style={{background:"#545652",lineHeight:2,textAlign:'right'}}>
                      <span style={{...exitStyle}}>退出系统</span>
                    </div>
                 <div className="yh-admin-layout-base">
                      { this.props.children }
                 </div>
           </div>
           
           
        )  
       
          
    }
}



export default AdminLayout ;