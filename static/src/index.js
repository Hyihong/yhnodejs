import React from 'react' 
import ReactDOM from 'react-dom'
import { Row, Col } from 'antd'
import "normalize.css"
import Home from './pages/home.jsx'


const appContainer = document.getElementById('root');

ReactDOM.render(
    <div>
      <Home></Home>
    </div>,
  appContainer
);