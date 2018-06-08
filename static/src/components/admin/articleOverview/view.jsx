import React,{Component} from 'react' 
import axios from 'axios' 
import {  Row,Col,Calendar,Modal,Form, Icon, Input, Button, Checkbox,message  } from 'antd' 
import { Link } from 'react-router-dom'

class View extends Component{
    constructor(props){
        super( props );
        this.state={
            articleOverview:[]
        }
    }
    componentDidMount(){
        // 获取文章概览
         axios({
             method:'GET',
             url:'/api/article/getTitleOverview',
         }).then( response =>{
            if( response.status === 200 ){
                if( response.data.code === 0 ){
                    this.setState({articleOverview: response.data.data})
                }
            }
         })
    }
    render(){
        return (<ul>
            {
                this.state.articleOverview.map( item=> 
                    <Link to={{pathname:`/admin/article/edit`,search: `?id=${item.article_id}`, }} key={item.article_id }>
                        <li><span>{item.article_type === 1 ? "【笔记】" :"【杂谈】"}</span>{item.article_title }</li>
                    </Link>)
            }
        </ul>)
    }

}

export default View ;