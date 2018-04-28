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
                    <Link to={{pathname:`/admin/article/editarticle` }} key={item.article_id }>
                        <li > {item.article_title }</li>
                    </Link>)
            }
        </ul>)
    }

}

export default View ;