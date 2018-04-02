import React,{Component} from 'react' 
import {  Row,Col,Calendar  } from 'antd' 
import moment from 'moment';
import 'moment/locale/zh-cn';
import axios from 'axios' 
import './style/home.less'
import tile_2 from "../assets/images/tile_2.jpg"
import tile_3 from "../assets/images/tile_3.jpg"
import tile_4 from "../assets/images/tile_4.jpg"
import tile_note from "../assets/images/tile_note.jpg"
import tile_daily from "../assets/images/tile_daily.jpg"
import tile_atlas from "../assets/images/tile_atlas.jpg"

//custom components
import { view as LoginModal } from "../components/login"


 // http://surfhousebarcelona.com/es


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            //天气数据
            weather:{},
            //登录
            loginModalVisible:false
        }
    }
    componentDidMount(){
        const _this = this;
        axios.get('http://wthrcdn.etouch.cn/weather_mini?city=厦门')
        .then(function (response) {
            if(response.status === 200){
                _this.setState({
                    weather: response.data.data.forecast[0]
                })
            }
        })
        .catch(function (error) {
           console.log(error);
        });
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
                {/* 登录框 */}
                <LoginModal visible= { this.state.loginModalVisible } onCancel={  this.showLoginModal } ></LoginModal>
                {/* 首页导航 */}
                <div className="yh-containter">
                    <div className="yh-nav">
                        <span onClick = {this.showLoginModal }><i className="fa fa-arrow-circle-right"></i>管理员登录</span>
                    </div>
                    <div className="yh-tiles">
                        <Row gutter={16}>
                            <Col span={12} className="yh-left-panel">
                                 <Row gutter={16}>
                                     <Col span={12}>
                                           <h3>笔记</h3>
                                           <h2 className="yh-line"></h2>
                                           <div>
                                                <img src={tile_note} alt="notes"/>
                                           </div>
                                     </Col>
                                     <Col span={12} >
                                            <div>
                                                <img src={tile_daily} alt="diary"/>
                                            </div>
                                            <h3>杂谈</h3>
                                            <h2 className="yh-line"></h2>
                                     </Col>
                                 </Row>
                            </Col>

                            <Col span={12} className="yh-left-panel">
                                 <Row style={{marginBottom:"15px"}}>
                                        <h3>图集</h3>
                                        <h2 className="yh-line"></h2>
                                        <div >
                                            <img src={tile_atlas} alt="atlas"/>
                                            
                                        </div>
                                 </Row>
                                 <Row gutter={8}>
                                     <Col span={12}>
                                        <div className="yh-tiles-data">
                                             {/* <h3> { moment().format('MMMM YYYY') } </h3>
                                             <Calendar fullscreen={false} style={{ width: "100%",height:"100%",borderRadius: 4 }}
                                                       onSelect={ function(moment){ console.log(moment) } }
                                                       onPanelChange = { (value,mode)=>{ }}
                                            ></Calendar >     */}
                                        </div>
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