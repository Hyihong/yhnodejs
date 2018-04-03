import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Row, Col } from 'antd'
import "normalize.css"
import Home from './pages/Home.jsx'
import Note from './pages/Note.jsx'
import zhCN from 'antd/lib/locale-provider/zh_CN';


const appContainer = document.getElementById('root');

ReactDOM.render(
    <Router>
         <div>
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/note" component={Note} />
         </div>
    </Router>,
  appContainer
);