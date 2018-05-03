/* 
   des:该页面为网站介绍页
*/
import React,{Component} from 'react' 
import { Row,Col } from 'antd' 
import './style/introduceSite.less'
import img from '../../assets/images/site.jpg' 


var TerminalTyping = function( el ){
    this.typingElement =  el;
}

class IntroduceMysite extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

        var terminalElements = [this.terminal_0, this.terminal_1];
             
        // 打印控制类
        function TypingController( elemArr ){
           this.cursor = 0 ;
           for (var i = 0; i < elemArr.length; i++){
              var e = elemArr[i]
              e.completeHTML = e.innerHTML
              e.innerHTML = ""
              e.i = 0;
           }
           this.clientList = elemArr ;
          
           this.action = function(e){
                let s = e.completeHTML.substring( 0,++e.i) ;
                if( e.i < e.completeHTML.length ){
                    e.innerHTML =  s + '|';
                    e.done = false;
                    setTimeout( this.action.bind(this,e), 130 );
                }else{
                    e.innerHTML =  s ;
                    this.trigger()
                }
           }
        }; 

        //原型方法 
        TypingController.prototype= {
            trigger : function(){
              if(this.cursor < this.clientList.length ){
                this.action( this.clientList[this.cursor++] )
              }
            },
            start : function(){
              this.action ( this.clientList[0] )
            }
        }

        //实例化控制类
        var typingStream=  new TypingController( terminalElements )
        typingStream.start()

    }
    render(){
        return(
            <div className="yh-introduce-panel">
                <Row>
                    <Col span={10}>
                        <img src={ img } style={{"width":"100%",height:"700px"}}/>
                    </Col>
                    <Col span={14}>
                        <div id="yh-introduce-terminal">
                                <div  className="yh-terminal">
                                        <span terminal='1' className="yh-terminal-line" ref={ el=>this.terminal_0 = el }>
                                        欢迎光临我的小站 !
                                        <br /><br/>
                                        这是我我独立完成全栈的项目。从前端到后端再到数据库，是我对这几年工作的一份总结和答卷。
                                        <br/>
                                        Em...接下说说所用的技术栈吧！
                                        后端部分：
                                        服务运行环境采用node.js，使用koa2搭建服务框架。其中，koa-viwes处理后端模板，koa-static处理静态资源，koa-router负责后端路由。
                                        数据库管理系统采用Mysql;
                                        前端部分：
                                        当然要用上当下最流行的react库，并用antd作为UI解决方案。前端路由react-router负责。因为现在数据比较简单，react-redux数据控制暂时还不需要。
                                        <br />
                                        在建这个小站的时候，填坑过程中除了增长了技术，更多的是更加熟练掌握解决问题的能力，并上升到架构的层度。能快速将技术融会贯通，是我建站过程中收获最多的。
                                        
                                        </span>
                                        <h3 ref={ el=>this.terminal_1 = el } >路漫漫其修远兮...</h3>
                                </div>
                        </div>
                    </Col>
                </Row>
                
            </div>
            
           
        )
    }
}

export default IntroduceMysite;


