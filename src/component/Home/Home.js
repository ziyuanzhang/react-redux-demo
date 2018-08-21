import React,{Component} from 'react'
import './Home.css'
import axios from 'axios';
import { Button } from 'antd';
import { Table } from 'antd';

class Home extends Component{
    constructor(){
        super()
        this.state={
            dataSource:[]
        };
    }

    handleGet(){
        axios.get('http://5b5eb1c48e9f160014b88d1e.mockapi.io/api/records').then((res)=>{
           let dataSource = res.data.map((data,index)=>{
               return{
                   key:index,
                   ...data
               }
           }) 
           this.setState({
             dataSource:dataSource
           })
        })
    }
    
    render(){
        let {dataSource} =this.state;
          const columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          }, {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
          }, {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
          }, {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
          }];
          
        return(
            <div className='Home'>
                <h2>Home -- ajax</h2>
                <p className='home-show'>
                    <Button  type="primary" onClick={()=>{this.handleGet()}}>展示内容</Button>
                </p>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}
export default Home;