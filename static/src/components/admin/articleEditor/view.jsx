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
        var simplemde = new SimpleMDE();
        simplemde.value("我的文本");
    }
    render(){
        return (<div>
            <textarea></textarea >   
        </div>)
    }

}

export default View ;