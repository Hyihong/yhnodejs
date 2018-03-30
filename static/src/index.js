import React from 'react' 
import ReactDOM from 'react-dom'
import { Row, Col } from 'antd'
import "normalize.css"
import Home from './pages/home.jsx'
import zhCN from 'antd/lib/locale-provider/zh_CN';


const appContainer = document.getElementById('root');

ReactDOM.render(
    <div>
      <Home></Home>
    </div>,
  appContainer
);