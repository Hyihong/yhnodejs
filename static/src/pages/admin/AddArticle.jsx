import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import { Row, Col, Button, Card } from 'antd'
import axios from 'axios'
//import './style/adminHome.less'
import { view as ArticleEditor } from '../../components/admin/articleEditor'


class AddArticle extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //console.log( this.props.location )
    }

    render() {
        return (
            <div>
                <ArticleEditor></ArticleEditor>
            </div>
        )
    }
}

export default AddArticle;

