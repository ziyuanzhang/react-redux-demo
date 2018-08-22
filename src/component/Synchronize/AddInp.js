import React, { Component } from 'react';
import { Input } from 'antd';


class AddInp extends Component { 
    constructor(){
        super();
        this.state={
          inpVal:''
        }
      }
    HandleChange(event){
        this.setState({
           inpVal:event.target.value
       })
     }
     HandleInputReset(){
       this.setState({
           inpVal:''
       })
     }
       
    render() {
        let {add} =this.props;
        let {inpVal} = this.state;
        let btn = (
             <div className='btn-add'  size="large" onClick={()=>{this.HandleInputReset();add(this.state.inpVal)}}>Add</div> 
        )
        return(
            <label><Input  size="large"  placeholder="输入内容" addonAfter={btn}  value ={inpVal}  onChange={(event)=>{this.HandleChange(event)}} onPressEnter={()=>{this.HandleInputReset();add(this.state.inpVal)}}/></label>
        )
    }
}
export default AddInp;