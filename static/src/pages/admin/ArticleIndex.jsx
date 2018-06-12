import React, { Component } from 'react'
import {  Row,Col,Radio,Modal,Form, Icon, Input, Button, Checkbox,message  } from 'antd' 
import { view as ArticleTitleList } from '../../components/admin/articleList' //标题概览
import { Link } from "react-router-dom";
import './style/articleIndex.less'
class ArticleIndex extends Component {
    render() {
        return (
            <Row>
                 todoList：文正列表、新增文章、删除文章、修改文章
                <Col sm={18}>
                    <ArticleTitleList></ArticleTitleList>
                </Col>
                <Col sm={6}>
                    <div className="yh-article-filter">
                        <h4>分类筛选</h4>
                        <div>只看杂谈</div>
                        <div>只看笔记</div>
                    </div>
                </Col>
            </Row>
        )
    }
}


export default ArticleIndex;