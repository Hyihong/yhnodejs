import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import { Row, Col, Button, Card } from 'antd'
import axios from 'axios'
//import './style/adminHome.less'
//import { view as ArticleTitleList } from '../../components/admin/articleTitleList'


class AddArticle extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                添加文章
            </div>
        )
    }
}

export default AddArticle;