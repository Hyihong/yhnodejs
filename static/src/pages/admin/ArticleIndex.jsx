import React, { Component } from 'react'
import {  Row,Col,Radio,Modal,Form, Icon, Input, Button, Checkbox,message  } from 'antd' 
import { view as ArticleTitleList } from '../../components/admin/articleList' //标题概览
import { Link } from "react-router-dom";
import './style/articleIndex.less'
class ArticleIndex extends Component {
    render() {
        return (
            <Row>
                <Col sm={18}>
                    <ArticleTitleList></ArticleTitleList>
                </Col>
                <Col sm={6}>
                   <div className="yh-article-right">
                    <div className="yh-create-article-btn">
                            <Link to="/admin/article/create"><span>写文章</span></Link>
                        </div>
                        <div className="yh-article-filter">
                            <h4>分类筛选</h4>
                            <div>只看杂谈</div>
                            <div>只看笔记</div>
                        </div>
                   </div>
                </Col>
            </Row>
        )
    }
}


export default ArticleIndex;