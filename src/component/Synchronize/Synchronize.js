import React, { Component } from 'react';
import './Synchronize.css';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';


class Synchronize extends Component { 

  
  render() {
    const Add = Input.Search;
    let {title,list} = this.props.reducerSync
    let {add,del} =this.props;
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
       
        {/* <label><input placeholder="输入内容" ref={inp =>{this.inp=inp}} type="text"/></label>
        <Button type="primary" onClick={()=>{add(this.inp.value)}}>click</Button> */}

        <Add
          placeholder="输入内容"
          enterButton="Add"
          size="large"
          onSearch={(value) => {add(value)}}
        />

      </div>
    );
  }
}

export default Synchronize;
