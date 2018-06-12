/* 
   des    :采用 simplemde 作为编辑器组件 
   URL：   https://github.com/sparksuite/simplemde-markdown-editor
*/
import React,{Component} from 'react' 
import ReactDOM from 'react-dom'
import { Redirect,withRouter } from 'react-router-dom'
import axios from 'axios' 
import SimpleMDE from 'simplemde'
import {  Row,Col,Radio,Modal,Form, Icon, Input, Button, Checkbox,message  } from 'antd' 
import { getQueryString } from '../../utils/base.js'
//手动引入simplemde的css文档,有更好的方法 ?
import '../../../node_modules/simplemde/dist/simplemde.min.css' 
import './style/editor.less'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class EditArticle extends Component {
    constructor(props){
        super( props );
        this.state ={
            radioValue:null,
            title:''
        }
    }
    componentDidMount(){
        const that = this;
        this.id = getQueryString(this.props.location.search,'id' );

        //初始化 makedown 编辑框
        this.simplemde = new SimpleMDE({
            autofocus:false,
            placeholder:'写点什么吧~',
            autoDownloadFontAwesome:false,
            spellChecker:false, //禁止检查拼写，因为采用英文校验，采用中文都会报错
            forceSync:true //如果设置为true，则强制在SimpleMDE中进行的文本更改立即存储在原始textarea中。默认为false
        });
        //根据文章ID请求文章详细数据
        axios({
            method:'GET',
            url:`/api/article/getDetail?id=${this.id}`,
        }).then( response =>{
            if( response.status === 200 ){
                 const _data = response.data.data[0];
                 that.prev = _data ;
                 that.simplemde.value(_data.content);
                 that.setState({
                     title:_data.title,
                     radioValue:_data.type
                 })
            }else{
                message.info( response.data.message );
            }
        })
    }

    onTitleChange=(v)=>{
        this.setState({ title:v.target.value})
    }
    // 提交修改
    onModify= ()=>{
   
        let content = this.simplemde.value() ;
        let { title } = this.state ;
        let that = this;
        if( title === '') {
            message.info('标题请勿为空');
            return;
        }
        if( content === ''){
            message.info('内容请勿为空');
            return;
        }
        
        let modifyContent ={};
        //判断修改项目
        Object.keys(this.prev).map( key =>{
            if( key ==='ID') return;
            switch (key) {
                case 'title' : this.prev[key] === title ? null : modifyContent.title = title ; break ;
                case 'content' : this.prev[key] === content ? null : modifyContent.content = content ; break ;
                case 'type' : this.prev[key] === this.state.radioValue ? null : modifyContent.type =   this.state.radioValue;
            }
        })
        
        if( Object.keys(modifyContent).length === 0 ){
            message.warn("未进行任何修改");
            return;
        }
        
        //提交修改
        axios({
            method:"POST",
            url:"/api/article/modify",
            data: Object.assign( modifyContent ,{id:that.id} ) 
        }).then( response=>{
            if( response.status === 200 ){
                if( response.data.code !== 0 ){
                    message.error(response.data.message )
                }else{
                  //验证成功
                  message.info( response.data.message )
                }
           }
        })
    }
    onRadioChange =(e)=>{
         this.setState({
            radioValue: e.target.value
         })
    }

    render() {
        return (
            <div>
                 <div className="yh-mde-containter">
                    <div className="yh-mde-title">
                        <Input placeholder="请输入标题" name="title" value={this.state.title} onChange={this.onTitleChange }></Input>
                    </div>
                    <div style={{float:'right',marginTop:'14px'}}> 
                        <span>文章分类：</span>
                        <RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
                            <Radio value={1}>笔记</Radio>
                            <Radio value={2}>杂谈</Radio>
                        </RadioGroup>
                    </div>
                
                    <textarea></textarea >   
                    <div style={{textAlign:"center"}}> <Button style={{width:100}} onClick={ this.onModify }>确定修改</Button> </div>
                </div>
            </div>
        )
    }
}

export default EditArticle;

