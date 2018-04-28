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

//手动引入simplemde的css文档,有更好的方法 ?
import '../../../../node_modules/simplemde/dist/simplemde.min.css' 
import './style.less'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class View extends Component{
    constructor(props){
        super( props );
        this.state ={
            radioValue:1,
        }
    }
    componentDidMount(){
        //初始化 makedown 编辑框
        this.simplemde = new SimpleMDE({
            autofocus:true,
            placeholder:'写点什么吧~',
            autoDownloadFontAwesome:false,
            spellChecker:false //禁止检查拼写，因为采用英文校验，采用中文都会报错
        });
    }
    submit= ()=>{
        let title = ReactDOM.findDOMNode( this.articleTitle ).value.trim() ;
        let content = this.simplemde.value() ;
        let that = this;
        if( title === '') {
            message.info('标题请勿为空');
            return;
        }
        if( content === ''){
            message.info('内容请勿为空');
            return;
        }
        axios({
            method:"POST",
            url:"/api/article/create",
            data: {
                title: title,
                content: content,
                type:this.state.radioValue
            }
        }).then( response=>{
            if( response.status === 200 ){
                if( response.data.code !== 0 ){
                    message.error(response.data.message )
                }else{
                  //验证成功
                  message.info( response.data.message )
                  setTimeout( ()=>{
                    this.props.history.push('/admin')
                  },2000)
                }
           }
        })
    }
    onRadioChange =(e)=>{
         this.setState({
            radioValue: e.target.value
         })
    }
    render(){
        return (
        <div className="yh-mde-containter">

            <div className="yh-mde-title">
                <Input placeholder="请输入标题" name="title" ref={ el=> this.articleTitle = el } ></Input>
            </div>
            <div style={{float:'right',marginTop:'14px'}}> 
                <span>文章分类：</span>
                <RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
                    <Radio value={1}>笔记</Radio>
                    <Radio value={2}>杂谈</Radio>
                </RadioGroup>
            </div>
           

            <textarea></textarea >   
            <div style={{textAlign:"center"}}> <Button style={{width:100}} onClick={ this.submit }>提交</Button> </div>
        </div>)
    }

}


export default withRouter(View) ;