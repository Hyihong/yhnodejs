import React,{Component} from 'react' 
import { Route,  Link } from "react-router-dom";
import {  Row,Col,Calendar  } from 'antd' 
import moment from 'moment';
import 'moment/locale/zh-cn';
import axios from 'axios' 

//import { getCookie,delCookie } from '../utils/cookie.js'


import './style/home.less'
import tile_2 from "../../assets/images/tile_2.jpg"
import tile_3 from "../../assets/images/tile_3.jpg"
import tile_4 from "../../assets/images/tile_4.jpg"
import tile_note from "../../assets/images/tile_note.jpg"
import tile_daily from "../../assets/images/tile_daily.jpg"
import tile_atlas from "../../assets/images/tile_atlas.jpg"

//custom components
import { view as LoginModal } from "../../components/public/login"


 // http://surfhousebarcelona.com/es


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            //天气数据
            weather:{},
            //登录
            loginModalVisible:false,
            loginErrMeg:""
        }
    }
    componentDidMount(){
        const _this = this;
        //第三方服务获取天气接口(2018.4.13呃，接口失效了...)
        // axios.get('http://wthrcdn.etouch.cn/weather_mini?city=厦门')
        // .then(function (response) {
        //     if(response.status === 200){
        //         _this.setState({
        //             weather: response.data.data.forecast[0]
        //         })
        //     }
        // })
        // .catch(function (error) {
        //    console.log(error);
        // });

       // 表单提交方式:在cookies中获取登录错误的反馈信息
        //读取cookie
        // if( !!getCookie('loginFailurMessage') ){
        //     const loginErrorMessage = new Buffer(getCookie('loginFailurMessage'), 'base64').toString() ;
        //     message.error( loginErrorMessage )
        //     this.setState({
        //         loginErrMeg:loginErrorMessage
        //     })
        //     delCookie('loginFailurMessage');
        // }else{
        //     console.log("没有cookies")
        // }
        
    }
    //设置日历浮层容器
    setCalendarContainer =(trigger)=>{
        return document.getElementById("calendarContainer")
    }
    //显示登录框
    showLoginModal=()=>{
        this.setState({
            loginModalVisible:!this.state.loginModalVisible
        })
    }
    render(){
        const { date, high, low, fengxiang } =  this.state.weather;
        return(
            <div className="yh-home">
                <div className="yh-containter">
                    <div className="yh-tiles">
                        <Row gutter={16}>
                            <Col span={12} className="yh-left-panel">
                                 <Row gutter={16}>
                                     <Col span={12}>
                                            <h3>我的笔记</h3>
                                            <h2 className="yh-line"></h2>
                                            <figure> 
                                                <div>
                                                    <Link to="/home/article/list">
                                                        <img src={tile_note} alt="article"/>
                                                        <figcaption>
                                                            <h1>NOTE</h1> 
                                                            <p>THERE IS MY NOTES. INCLUDING STUDY NOTE AND TINY TALK</p>
                                                        </figcaption>
                                                    </Link> 
                                                </div>
                                           </figure>
                                     </Col>
                                     <Col span={12} >
                                            <figure> 
                                                <div>
                                                    <Link to="/home/aboutme">
                                                        <img src={tile_daily} alt="aboutme"/>
                                                        <figcaption>
                                                            <h1>ME</h1> 
                                                            <p>HEY! WHAT I LOOK LIKE</p>
                                                        </figcaption>
                                                    </Link> 
                                                </div>
                                           </figure>
                                            <h3>关于我</h3>
                                            <h2 className="yh-line"></h2>
                                     </Col>
                                 </Row>
                            </Col>

                            <Col span={12} className="yh-left-panel">
                                 <Row style={{marginBottom:"15px"}}>
                                        <h3>图集</h3>
                                        <h2 className="yh-line"></h2>
                                        <figure> 
                                                <div>
                                                    <Link to="/home/note">
                                                        <img src={tile_atlas} alt="atlas"/>
                                                        <figcaption>
                                                            <h1>GALLERY</h1> 
                                                            <p>PHOTO EXHIBITION TO SHOW SOME OF THE PICTURE I lIKE</p>
                                                        </figcaption>
                                                    </Link> 
                                                </div>
                                           </figure>
                                 </Row>
                                 <Row gutter={8}>
                                     <Col span={12}>
                                        <div className="yh-tiles-data">
                                            <figure> 
                                                    <div className="yh-tiles-data">
                                                        <Link to="/home/introduce/mysite">
             
                                                            <figcaption>
                                                                <h1>WEBSITE</h1> 
                                                                <p>INTRODUCE AND RECORD MY WEBSITE</p>
                                                            </figcaption>
                                                        </Link> 
                                                    </div>
                                            </figure>
                                        </div>
                                        <Link to="/home/introduce/mysite"> <h3>个站介绍</h3></Link> 
                                        <h2 className="yh-line" style={{width:'75px'}}></h2>
                                    </Col>
                                     <Col span={12}>
                                         <Row gutter={8} className="yh-little-tiles" >
                                             <Col span={24} style={{marginBottom:"15px"}}>
                                                  <div className="yh-base-info">
                                                         <div><i className="fa fa-map-marker"></i>：XIAMEN</div>
                                                         <div> <span>{ date },   </span> <span>{ low }-{ high }</span></div>
                                                         <div>{ fengxiang }</div>
                                                  </div>
                                             </Col>
                                             <Col span={12}>
                                                    <a href="https://github.com/Hyihong" target="_blank">
                                                        <div className="yh-more-about-me yh-github">
                                                            <i className="fa fa-github fa-3x"></i>
                                                        </div>
                                                    </a>
                                             </Col>
                                             <Col span={12}>
                                                    <a href="https://weibo.com/" target="_blank">
                                                        <div className="yh-more-about-me yh-weibo" >
                                                            <i className="fa fa-weibo fa-3x"></i>
                                                        </div>
                                                    </a>
                                             </Col>
                                             {/* https://www.sojson.com/open/api/weather/json.shtml?city=北京 */}
                                         </Row>
                                     </Col>
                                 </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;