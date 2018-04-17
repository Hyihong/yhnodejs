import React,{Component} from 'react' 
import { Route,  Link } from "react-router-dom";
import {  Row,Col,Button,Card   } from 'antd' 
import moment from 'moment';
import 'moment/locale/zh-cn';
import axios from 'axios' 
import './style/adminHome.less'
import { view as ArticleTitleList } from '../../components/admin/articleTitleList'


const AdminNavSection = function(props){
    return(
        <Row className="yh-admin-guide-layout-row" type="flex" justify="start" style={{background:"#f9f9f9"}} >
            <Col className ="yh-admin-layout-left-wrapper" span={8} >
                <Row className="yh-admin-layout-left-panel" type="flex" justify="center" align="middle">
                    <Col>
                        <Link to= {props.link }><Button style={{display:"tableCell"}}>{props.type} </Button></Link>
                    </Col>
                </Row>
            </Col>
            <Col className="rightPanel" span={16}>
                  { props.rightPanel }
            </Col>
        </Row>
    )
} 

const Pictures = function( props){
    return(
        <div>这里是图片</div>
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
                <AdminNavSection type="写文章" link="/admin/addarticle" rightPanel={ <ArticleTitleList/> } ></AdminNavSection>
                <AdminNavSection type="传图片"  link="/admin/addarticle" rightPanel={ <Pictures/>} ></AdminNavSection>
                <AdminNavSection type="关于我"  link="/admin/addarticle" ></AdminNavSection>
            </div>
        )
       
    }
}

export default AdminHome;