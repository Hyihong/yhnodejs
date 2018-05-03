import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import { Row, Col, Button, Card } from 'antd'
import axios from 'axios'
//import './style/adminHome.less'


class AddArticle extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //console.log( this.props.location.pathname )
    }

    render() {
        return (
            <div>
                编辑文章
            </div>
        )
    }
}

export default AddArticle;

