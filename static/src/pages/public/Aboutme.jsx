/* 
   des:该页面为个人简介页
*/
import React,{Component} from 'react' 
import { Row,Col } from 'antd' 
import './style/introduceSite.less'
import { Fullpage, Slide, HorizontalSlider } from '../../components/public/fullpageSlider';

const fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 0,
    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: 5,
    scrollSpeed: 400,
    hideScrollBars: true,
    enableArrowKeys: true,
    onSlideChangeEnd:()=>{
        console.log("结束")
    }
  };
   
fullPageOptions.slides = [
    <Slide style={{background:'yellow'}}>
        基本信息介绍
    </Slide>,
    <Slide>
        技能介绍
    </Slide>,
    <Slide style={{background:'yellow'}}> 
        工作经验   
    </Slide>,
    <Slide style={{background:'yellow'}}> 
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


