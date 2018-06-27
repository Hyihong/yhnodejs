/* 
   des:该页面为个人简介页
*/
import React,{Component} from 'react' 
import { Row,Col,Card } from 'antd' 
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
    <Slide className="yh-slider-2" >
       <div className="yh-aboutme-panel panel-2">
           <div className="yh-panel-title">
                <i className="fa fa-pencil-square fa-4x"></i>
                <h1>MY SKILLS</h1>
           </div>
            <TweenOne animation={{ type:'from',x:-500,delay:300 }}>
                <Row type="flex">
                    <Col span={6}><div className="yh-skill-classNameify">Base-Skill</div></Col>
                    <Col span={18}>
                          <ul>
                              <li>1、文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>2、文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>3、文字文字文字文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>4、文字文字文字文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>5、文字文字文字文字文字文字文字文字文字文字文字文字文字文字</li>
                          </ul>
                    </Col>
                </Row>
                <Row type="flex">
                    <Col span={6}><div className="yh-skill-classNameify">HTML/CSS/JS</div></Col>
                    <Col span={18}>
                          <ul>
                              <li>1、文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>2、文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>3、文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>4、文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>5、文字文字文字文字文字文字文字文字文字文字文字</li>
                          </ul>
                    </Col>
                </Row>
                <Row type="flex">
                    <Col span={6}><div className="yh-skill-classNameify">Server-Side</div></Col>
                    <Col span={18}>
                          <ul>
                              <li>1、文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>2、文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>3、文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>4、文字文字文字文字文字文字文字文字文字文字文字</li>
                              <li>5、文字文字文字文字文字文字文字文字文字文字文字</li>
                          </ul>
                    </Col>
                </Row>
            </TweenOne>
        </div>
    </Slide>,
    <Slide className="yh-slider-3"> 
       <div className="yh-aboutme-panel panel-3">
            <div className="yh-panel-title">
                <i className="fa fa-calendar fa-4x"></i>
                <h1>WORK {'experience'.toLocaleUpperCase()}</h1>
            </div>
            <TweenOne animation={{ type:'from',y:500,delay:300 }}>
            <Row>
				<Col span={24}>
                <ul className="yh-timeline">
						<li className="yh-timeline-start">
							<div>start</div>
						</li>
						<li className="yh-timeline-unverted">
							<div className="yh-timeline-badge"></div>
							<div className="yh-timeline-panel">
								<div className="yh-timeline-heading">
									<h3 className="yh-timeline-title">项目助理</h3>
									<span className="company">厦门雅马哈- 2014-2015</span>
								</div>
								<div className="timeline-body">
									<p>作为项目助理，协助完善项目需求分析与文档归纳与整理</p>
								</div>
							</div>
						</li>
						<li className="yh-timeline-inverted">
							<div className="yh-timeline-badge"></div>
							<div className="yh-timeline-panel">
								<div className="yh-timeline-heading">
									<h3 className="yh-timeline-title">web前端开发</h3>
									<span className="company">Company Name - 2013 - 2015</span>
								</div>
								<div className="timeline-body">
									<p>负责百鱼移动端、百鱼管理后台、百鱼微信公众号的视觉效果定义与前端开发</p>
								</div>
							</div>
						</li>
                        <li className="yh-timeline-unverted">
							<div className="yh-timeline-badge"></div>
							<div className="yh-timeline-panel">
								<div className="yh-timeline-heading">
									<h3 className="yh-timeline-title">web前端架构/开发</h3>
									<span className="company">厦门立林软件 - 2017 - Current</span>
								</div>
								<div className="timeline-body">
									<p>负责项目前端工程的架构设计与前端开发</p>
								</div>
							</div>
						</li>
			    	</ul>
				</Col>
			</Row>
            </TweenOne>
        </div>  
    </Slide>,
    <Slide className="yh-slider-4"> 
         <div className="yh-aboutme-panel panel-4">
            <div className="yh-panel-title">
                <i className="fa fa-braille fa-4x"></i>
                <h1>{'progress'.toLocaleUpperCase()}</h1>
            </div>
            <TweenOne animation={{ type:'from',y:500,delay:300 }}>
                  <div className="yh-progress-wrapper">
                  <Row >
                      <Col span={8}>
                          <Card>
                               多多网游加速器官网
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card>
                               多微视频网站
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card>
                               百鱼官网&&百鱼后台管理系统
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card>
                               百鱼APP移动端
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card>
                               百鱼微信公众号开发
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card>
                               立林科技智慧社区web管理后台
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card>
                               立林云对讲项目办事处管理系统PC版
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card>
                               立林云对讲项目办事处管理系统移动版
                          </Card>
                      </Col>
                      <Col span={8}>
                          <Card>
                               Hyihong个人网站
                          </Card>
                      </Col>
                  </Row>
                  </div>
            </TweenOne>
        </div>  
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
                <div className="yh-modal"></div>  
            </div>
        )
    }
}

export default About;


