import React,{Component} from 'react' 
import {  Row,Col } from 'antd' 
import './style/home.less'
import tile_1 from "../assets/images/tile_1.jpg"
import tile_2 from "../assets/images/tile_2.jpg"
import tile_3 from "../assets/images/tile_3.jpg"
import tile_4 from "../assets/images/tile_4.jpg"
import tile_note from "../assets/images/tile_note.jpg"
import tile_daily from "../assets/images/tile_daily.jpg"
import tile_atlas from "../assets/images/tile_atlas.jpg"


 //  http://surfhousebarcelona.com/es

class Home extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div className="yh-home">
                <div className="yh-containter">
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
                                        <div>
                                            <img src={tile_atlas} alt="diary"/>
                                        </div>
                                 </Row>
                                 <Row gutter={8}>
                                     <Col span={12}>
                                        <div>
                                            <img src={tile_1} alt="diary"/>
                                        </div></Col>
                                     <Col span={12}>
                                         <Row className="yh-little-tiles">
                                             <Col span={12}>1</Col>
                                             <Col span={12}>2</Col>
                                             <Col span={12}>3</Col>
                                             <Col span={12}>4</Col>
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