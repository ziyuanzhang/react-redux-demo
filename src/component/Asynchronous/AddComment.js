
import React,{Component} from 'react';
import './AddComment.css'

import { Input } from 'antd';
import { Button } from 'antd';
import {FormatDateTime} from '../utill/utill';

class AddComment extends Component{
    constructor(props){
        super(props)
        this.state={
            TXTval:''
        }
    }

    HandleChange(event){
        this.setState({
            TXTval:event.target.value
        })
    }
   HandleAddComment(){
        this.setState({
            TXTval:''
        })
       let AddCom = {
            time: FormatDateTime(new Date()),
           /*  userName:'hahha', */
            content: this.state.TXTval
       }
       this.props.AddCom(AddCom)
   }
   render(){
    const { TextArea } = Input;
    let {TXTval} =this.state;
       return(
           <div className='comment-enter-cantainer'>
                 <TextArea className='comment-enter' value={TXTval} onChange={(event)=>{this.HandleChange(event)}} placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
                 <p>
                  <Button className='comment-add-Btn' type="primary" onClick={()=>{this.HandleAddComment()}}>Primary</Button> 
                 </p>
                 
           </div>
       )
   }
}
export default AddComment;