/* 
   des:该页面为个人简介页
*/
import React,{Component} from 'react' 
import { Row,Col } from 'antd' 
import './style/introduceSite.less'
import { Fullpage, Slide } from '../../components/public/fullpageSlider';
import banner  from '../../assets/images/about_banner.png'
import head  from '../../assets/images/head.jpg'
import './style/aboutme.less'

const fullPageOptions = {
    scrollSensitivity: 0,
    touchSensitivity: 5,
    scrollSpeed: 400,
    hideScrollBars: true,
    enableArrowKeys: true,
    onSlideChangeEnd:()=>{
        console.log("结束")
    }
  };
   
fullPageOptions.slides = [
    <Slide >
        <div className="yh-aboutme-panel panel-1">
             <img className="yh-img-banner" src={banner} alt="banner"/>}
             <Row type="flex" justify="center">
                 <img className="yh-img-head"src={head} alt="头像"/>
             </Row>
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
             
        </div>
    </Slide>,
    <Slide style={{background:'#2378b4'}}>
        技能介绍
    </Slide>,
    <Slide style={{background:'yellow'}}> 
        工作经验   
    </Slide>,
    <Slide> 
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


