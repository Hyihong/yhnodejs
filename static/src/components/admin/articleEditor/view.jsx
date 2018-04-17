/* 
   des    :采用 simplemde 作为编辑器组件 
   URL：   https://github.com/sparksuite/simplemde-markdown-editor
*/
import React,{Component} from 'react' 
import axios from 'axios' 
import SimpleMDE from 'simplemde'
import {  Row,Col,Calendar,Modal,Form, Icon, Input, Button, Checkbox,message  } from 'antd' 
//手动引入simplemde的css文档,有更好的方法 ?
import '../../../../node_modules/simplemde/dist/simplemde.min.css' 
import './style.less'


class View extends Component{
    constructor(props){
        super( props );
    }
    componentDidMount(){
        //初始化 makedown 编辑框
        var simplemde = new SimpleMDE({
            autofocus:true,
            placeholder:'写点什么吧~',
            autoDownloadFontAwesome:false,
            spellChecker:false //禁止检查拼写，因为采用英文校验，采用中文都会报错
        });
 
    }
    
    render(){
        return (
        <div className="yh-mde-containter">
            <div className="yh-mde-title">
                <Input placeholder="请输入标题"></Input>
            </div>
            <textarea></textarea >   
            <div style={{textAlign:"center"}}> <Button style={{width:100}}>提交</Button> </div>
        </div>)
    }

}

export default View ;