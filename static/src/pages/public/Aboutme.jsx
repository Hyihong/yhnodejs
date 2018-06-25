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
    <Slide className="yh-slider-2" >
       <div className="yh-aboutme-panel panel-2">
           <div className="yh-panel-title">
                <i className="fa fa-pencil-square fa-4x"></i>
                <h1>MY SKILLS</h1>
           </div>
            <TweenOne animation={{ type:'from',x:-500,delay:300 }}>
                <Row type="flex">
                    <Col span={6}><div className="yh-skill-classify">Base-Skill</div></Col>
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
                    <Col span={6}><div className="yh-skill-classify">HTML/CSS/JS</div></Col>
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
                    <Col span={6}><div className="yh-skill-classify">Server-Side</div></Col>
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
                <i class="fa fa-calendar fa-4x"></i>
                <h1>WORK {'experience'.toLocaleUpperCase()}</h1>
            </div>
            <TweenOne animation={{ type:'from',y:-500,delay:300 }}>
            <Row>
				<Col span={24}>
                <ul class="yh-timeline">
						<li class="yh-timeline-heading">
							<div>start</div>
						</li>
						<li class="yh-timeline-unverted">
							<div class="yh-timeline-badge"><i className="fa fa-flag-checkered"></i></div>
							<div class="yh-timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Senior Devr</h3>
									<span class="company">Company Name - 2016 - Current</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li>
						<li class="timeline-inverted ">
							<div class="timeline-badge"><i class="icon-suitcase"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Junior Developer</h3>
									<span class="company">Company Name - 2013 - 2015</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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
                <i class="fa fa-braille fa-4x"></i>
                <h1>{'progress'.toLocaleUpperCase()}</h1>
            </div>
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
            </div>
        )
    }
}

export default About;


