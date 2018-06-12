import React,{Component} from 'react' 
import axios from 'axios' 
import {  List,Row,Col,Tag,Modal,Form, Icon, Input, Button, Checkbox,message, Divider  } from 'antd' 
import { Link } from 'react-router-dom'
import './style.less'
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
                    console.log(response.data.data)
                }
            }
         })
    }
    render(){
        return (
            <div className="yh-article-overview">
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    pageSize:10,
                    size:"small"
                }}
                dataSource={this.state.articleOverview}
                renderItem={
                    item =>(
                        <List.Item key={ item.ID }>
                            <Link to={{pathname:`/admin/article/edit`,search: `?id=${item.ID}`, }} >
                               <h3>{item.type === 1 ? <Tag color="purple">笔记</Tag> :<Tag color="cyan">杂谈</Tag>}{item.title }</h3>
                            </Link>
                            <div className="yh-overview-content">{item.overview}</div>
                            <span>更新时间:{item.lastTime}</span>
                       </List.Item>
                    )
                }
            >
            </List>
            </div>
        )
    }

}

export default View ;