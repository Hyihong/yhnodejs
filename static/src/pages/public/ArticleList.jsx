import React,{Component} from 'react' 
import ArticleList from '../admin/ArticleIndex.jsx'
import {  Row,Col,Calendar  } from 'antd' 



class Note extends Component{
    constructor(props){
        super(props);
      
    }
    componentDidMount(){
         
    }
    render(){
        return(
            <div style={{ maxWidth: '800px',margin: '20px auto 10px auto'}}>
               <ArticleList></ArticleList>
            </div>
        )
    }
}

export default Note;