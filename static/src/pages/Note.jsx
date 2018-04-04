import React,{Component} from 'react' 
import {  Row,Col,Calendar  } from 'antd' 



class Note extends Component{
    constructor(props){
        super(props);
      
    }
    componentDidMount(){
       
    }
    render(){
        return(
            <div>
                 <form action="/aaa" method ='post'>
                       <input type="text" name="user"/>
                       <button type="submit">提交</button>
                 </form>
            </div>
        )
    }
}

export default Note;