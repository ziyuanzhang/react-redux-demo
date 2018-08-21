import React, { Component } from 'react';
import './Synchronize.css';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';


class Synchronize extends Component { 
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
    let {title,list} = this.props.reducerSync
    let {add,del} =this.props;
    let {inpVal} = this.state;
    let btn = (
         <div className='btn-add'  size="large" onClick={()=>{this.HandleInputReset();add(this.state.inpVal)}}>Add</div> 
    )
    return (
      <div className="Synchronize">
      <h2>{title}</h2>
      <Row>
           {
             list.map((value,index)=>{
               return (
                <Col span={24} key={index}>  {value} : <Button type="primary" onClick={()=>{del(index)}}>del</Button>  </Col>
                )
             })
           }
       </Row>
        <hr/>
          <label><Input  size="large"  placeholder="输入内容" addonAfter={btn}  value ={inpVal}  onChange={(event)=>{this.HandleChange(event)}} onPressEnter={()=>{this.HandleInputReset();add(this.state.inpVal)}}/></label>

      </div>
    );
  }
}

export default Synchronize;
