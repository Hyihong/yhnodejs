/* 
   des:该页面为个人简介页
*/
import React,{Component} from 'react' 
import { Row,Col } from 'antd' 
import './style/introduceSite.less'
import TweenOne from 'rc-tween-one';
import { Fullpage, Slide } from '../../components/public/fullpageSlider';
import banner  from '../../assets/images/about_banner.png'
import head  from '../../assets/images/head.jpg'
import './style/aboutme.less'

const fullPageOptions = {
    scrollSensitivity: 0,
    touchSensitivity: 5,
    scrollSpeed: 300,
    hideScrollBars: true,
    onSlideChangeEnd:(compName, props, state, newState)=>{
  
    },
    onSlideChangeStart:(compName, props, state, newState)=>{

    },
    
  };
   
fullPageOptions.slides = [
    <Slide >
        <div className="yh-aboutme-panel panel-1">
             <img className="yh-img-banner" src={banner} alt="banner"/>}
             <Row type="flex" justify="center">
                 <img className="yh-img-head"src={head} alt="头像"/>
             </Row>
             <TweenOne animation={{ type:'from',y:500,opacity:0,delay:400}}><h1 className="yh-sayhello">Hey! I'm Chen Yihong</h1></TweenOne>
             <TweenOne animation={{ type:'from',y:-100,opacity:0,delay:300 }}>
                <div className="yh-base-info">
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <ul className="yh-base-info-left">
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            </ul>
                        
                        </Col>
                        <Col span={12}>
                            <ul className="yh-base-info-right">
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                            <li><b>XXXX</b>:<span>XXXXXXXX</span></li>
                        </ul>
                        </Col>
                    </Row>
                </div>
             </TweenOne>
        </div>
    </Slide>,
    <Slide style={{background:'#2378b4'}}>
       <div className="yh-aboutme-panel panel-2">
            <TweenOne animation={{ type:'from',x:-500,delay:300 }}>
                <Row>
                    <Col span={5}><div className="yh-skill-classify">Base-Skill</div></Col>
                    <Col span={19}>
                          <ul>
                              <li>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                              <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                          </ul>
                    </Col>
                </Row>
                <Row>
                    <Col span={5}><div className="yh-skill-classify">HTML/CSS/JS</div></Col>
                    <Col span={19}>
                          <ul>
                              <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                              <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                              <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                          </ul>
                    </Col>
                </Row>
                <Row>
                    <Col span={5}><div className="yh-skill-classify">Server-Side</div></Col>
                    <Col span={19}>
                          <ul>
                              <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                              <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                              <li>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</li>
                          </ul>
                    </Col>
                </Row>
            </TweenOne>
        </div>
    </Slide>,
    <Slide > 
        工作经验   
    </Slide>,
    <Slide style={{background:'#2378b4'}}> 
        项目经验  
    </Slide>
]


class About extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <Fullpage {...fullPageOptions} ></Fullpage>   
            </div>
        )
    }
}

export default About;


