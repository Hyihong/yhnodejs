import React,{Component} from 'react' 
import axios from 'axios' 
import {  List,Tag,Modal  } from 'antd' 
import { Link } from 'react-router-dom'
import moment from 'moment'
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
                    this.setState({articleOverview: response.data.data});
               
                }
            }
         })

         console.log(moment('2018-06-15T02:39:37.000Z').format('YYYY-MM-DD HH:mm') );
         
    }
    // 删除文章
    delete =(id)=>{
        let that = this;
        Modal.confirm({
            title: '确认删除该文章？',
            content: '删除后文章不可恢复？',
            okText: '确认删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                axios({
                    method:'GET',
                    url:`/api/article/delete`,
                    params: {id: id }
                }).then( response =>{
                   if( response.status === 200 ){
                       if( response.data.code === 0 ){
                           that.state.articleOverview.map( (item,idx )=>{
                               if(item.ID === id){
                                   //视图层删除该条记录
                                   that.state.articleOverview.splice(idx,1)
                                   that.setState({ articleOverview : that.state.articleOverview })
                               }
                           })
                       }
                   }
                })
            },
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
                            <div className="yh-list-operate">
                                <span>更新:{ moment(item.lastTime).format('YYYY-MM-DD HH:mm')}</span> 
                                <span>创建:{ moment(item.createTime).format('YYYY-MM-DD HH:mm')}</span> 
                                <span className="yh-delete-article-btn" onClick={ ()=>this.delete(item.ID) }>删除</span>
                            </div>
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