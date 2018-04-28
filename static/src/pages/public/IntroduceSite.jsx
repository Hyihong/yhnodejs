/* 
   des:该页面为网站介绍页
*/
import React,{Component} from 'react' 
import {  Row,Col,Calendar  } from 'antd' 
import img from '../../assets/images/tile_note.jpg'
import './style/introduceSite.less'

class IntroduceMysite extends Component{
    constructor(props){
        super(props);
      
    }
    componentDidMount(){

        function getAllElementsWithAttribute(attribute)
        {
          var matchingElements = [];
          
          var allElements = document.getElementsByTagName('span');
          
          for (var i = 0, n = allElements.length; i < n; i++)
          {
            if (allElements[i].getAttribute(attribute))
            {
              matchingElements.push(allElements[i]);
            }
          }
          return matchingElements;
        }
        
        var terminalElements = getAllElementsWithAttribute("terminal");
        
        function terminals_init()
        {
          var elements = terminalElements;

          for (var i = 0; i < elements.length; i++)
          {
            var e = elements[i]
            e.completeHTML = e.innerHTML
            e.innerHTML = ""
            e.i = 0
          }
        
        }
        
        function terminals_start()
        {
          terminals_next()
        }
        
        function terminals_next()
        {
          var done = true
          var elements = terminalElements;
        
          for (var i = 0; i < elements.length && done == true; i++)
          {
            var e = elements[i]
        
            e.i ++
        
            if (e.innerHTML.length >= e.completeHTML.length)
            {
              e.innerHTML = e.completeHTML
            }
            else
            {
              var s =  e.completeHTML.substring(0, e.i) 
        
              if (s.slice(-1) == " ") 
              {
                if(e.innerHTML.length % 6 == 0 ) { s = s + "" } else { s = s + "|" }
              }
              else
              {
                s = s + "|"
              }
        
              e.innerHTML = s
              e.parentNode.style.display = 'none'
              e.parentNode.style.display = 'block'
              done = false
            }
          }
        
          if (!done)
          {
            setTimeout(terminals_next, 150)
          }
        }
        
        terminals_init()
        terminals_start()
    }
    render(){
        return(
            <div className="yh-introduce-panel">
                <Row>
                    <Col span={10}>
                        <img src={ img } />
                    </Col>
                    <Col span={14}>
                        <div id="yh-introduce-terminal">
                                <div  className="yh-terminal">
                                        <span terminal='1' className="yh-terminal-line">
                                        Hello~ 欢迎光临我的小站 !
                                        <br /><br />
                                        这个小站是我一行行代码累出来的，更使我独立完成全栈的项目。从前端到后端再到数据库，是我对这几年工作的一份总结和答卷。
                                        <br /><br />
                                        Em..先来说说所用的技术栈吧！
                                        后端部分：
                                        服务运行环境采用node.js，使用koa2搭建服务框架。其中，koa-viwes处理后端模板，koa-static处理静态资源，koa-router负责后端路由。
                                        数据库管理系统采用Mysql;
                                        前端部分：
                                        当然要用上当下最流行的react库，并用antd作为UI解决方案。前端路由react-router负责。因为现在数据比较简单，react-redux数据控制暂时还不需要。
                                        <br /><br /><br />
                                        在建这个小站的时候，填坑过程中除了增长了技术，更多的是更加熟练掌握解决问题的能力，并上升到架构的层度。能快速将技术融会贯通，是我建站过程中收获最多的。
                                        <br /><br />
                                        还会慢慢完善它，情景期待吧~
                                        </span>
                                </div>
                        </div>
                    </Col>
                </Row>
                
            </div>
            
           
        )
    }
}

export default IntroduceMysite;