import React,{Component} from 'react' 
import { Route,  Link } from "react-router-dom";
import {  Row,Col,Button,Card   } from 'antd' 
import moment from 'moment';
import 'moment/locale/zh-cn';
import axios from 'axios' 
import './style/adminHome.less'


const AdminGuideLayout = function(props){
    return(
        <Row className="yh-admin-guide-layout-row" type="flex" justify="start" >
            <Col className ="yh-admin-layout-left-wrapper" span={8} >
                <Row className="yh-admin-layout-left-panel" type="flex" justify="center" align="middle">
                    <Col>
                           <Button onClick={props.onClick} style={{display:"tableCell"}}>{props.type} </Button>
                    </Col>
                </Row>
            </Col>
            <Col className="rightPanel" span={16}>
                  { props.rightPanel }
            </Col>
        </Row>
    )
} 

const ArticleTitleList = function( props){
    return(
        <ul>
            {
                ['除了小猪佩奇，还有这19种纹身帮你变成社会人','持续的寒意','知音号'].map( item =>{
                    return <li key={item}>{item}</li>
                })
            }
        </ul>
      
    )
}
class AdminHome extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
  
    render(){
        return(
            <div className="yh-admin-home-layout-containter">
                <AdminGuideLayout type="写文章" rightPanel={ <ArticleTitleList/> } ></AdminGuideLayout>
                <AdminGuideLayout type="传图片" ></AdminGuideLayout>
                <AdminGuideLayout type="关于我" ></AdminGuideLayout>
            </div>
        )
       
    }
}

export default AdminHome;