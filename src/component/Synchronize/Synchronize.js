import React, { Component } from 'react';
import './Synchronize.css';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import AddInpS from '../../container/connectAddInp'

class Synchronize extends Component { 

  render() {
    let {title,list} = this.props.reducerSync
    let {del} =this.props;
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
         <AddInpS />

      </div>
    );
  }
}

export default Synchronize;
