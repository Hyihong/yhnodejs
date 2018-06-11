import React,{Component} from 'react' 
import { Route,  Link,withRouter } from "react-router-dom";
import {  Row,Col,Button,Card   } from 'antd' 
import moment from 'moment';
import 'moment/locale/zh-cn';
import axios from 'axios' 
import './style/adminHome.less'
import { view as ArticleTitleList } from '../../components/admin/articleOverview' //标题概览
import nav1 from "../../assets/images/admin/admin-nav1.jpg"
import nav2 from "../../assets/images/admin/admin-nav2.jpg"
import nav3 from "../../assets/images/admin/admin-nav3.jpg"
import nav4 from "../../assets/images/admin/admin-nav4.jpg"

const AdminNavSection = function(props){
    return(
        <Col className="yh-admin-guide-layout-col" xs={{span:20}} sm={{span:10}}>
            <Row className="yh-admin-layout-panel" justify="center" align="middle">
                <img className="yh-admin-nav-img" src={props.navImg} alt="导航图片"/>
                <div>
                    <Link to= { props.link } className="yh-admin-nav-text"><Button style={{display:"tableCell"}}>{props.type} </Button></Link>
                </div>
            </Row>
        </Col>
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
            <Row className="yh-admin-home-layout-containter" type="flex" justify="center">
                <AdminNavSection type="文章管理"  link="/admin/article/create" navImg={nav1} ></AdminNavSection>
                <AdminNavSection type="图片管理"  link="/admin/article"        navImg={nav2} ></AdminNavSection>
                <AdminNavSection type="简历管理"  link="/admin/addarticle"     navImg={nav3} ></AdminNavSection>
                <AdminNavSection type="建站管理"  link="/admin/addarticle"     navImg={nav4} ></AdminNavSection>
            </Row>
        )
       
    }
}

export default AdminHome;