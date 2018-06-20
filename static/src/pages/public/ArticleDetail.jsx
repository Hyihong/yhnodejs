/* 
   des    :采用 simplemde 作为编辑器组件 
   URL：   https://github.com/sparksuite/simplemde-markdown-editor
           https://simplemde.com/
   note:   这个页面为前台与后台共享的页面，前台作为展示页面，后台作为编辑页面。
*/
import React,{Component} from 'react' 
import axios from 'axios' 
import SimpleMDE from 'simplemde'
import {  Row,Col,Radio,Modal,Form, Icon, Input, Button, Checkbox,message  } from 'antd' 
import { getQueryString } from '../../utils/base.js'
//手动引入simplemde的css文档,有更好的方法 ?
import '../../../node_modules/simplemde/dist/simplemde.min.css' 
import './style/article.less'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class ArticleDetail extends Component {
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
            forceSync:true, //如果设置为true，则强制在SimpleMDE中进行的文本更改立即存储在原始textarea中。默认为false
            togglePreview:false,
            toolbar:false,//讲工具栏隐藏
            
        });
        //根据文章ID请求文章详细数据
        axios({
            method:'GET',
            url:`/api/public/article/getDetail?id=${this.id}`,
        }).then( response =>{
            if( response.status === 200 ){
                 const _data = response.data.data[0];
                 that.prev = _data ;
                 that.simplemde.value(_data.content);
                 that.setState({
                     title:_data.title,
                     radioValue:_data.type
                 })
                 this.simplemde.togglePreview();
            }else{
                message.info( response.data.message );
            }
        })
       
    }


    render() {
        return (
            <div className="yh-article-detail">
                 <div className="yh-mde-containter">
                    <div className="yh-mde-title">
                        <h1>{this.state.title}</h1>
                    </div>
                    <div> 
                        <p>文章分类：{this.state.radioValue === 1 ? '笔记':'杂谈'}</p>
                    </div>
                    <textarea></textarea >   
                   
                </div>
            </div>
        )
    }
}

export default ArticleDetail;

