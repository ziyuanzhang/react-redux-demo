import React,{Component} from 'react'
import './Asynchronous.css'
import axios from 'axios';
import { List } from 'antd';

import AddComment from './AddComment'

class Asynchronous extends Component{
    constructor(){
        super()
        this.state = {
            Error:null,
            isLoad:true,            
            commentList:[]
          }
    }
    componentDidMount(){
        axios.get('https://5b5eb1c48e9f160014b88d1e.mockapi.io/api/commentList').then((res)=>{
          //console.log(res)
             this.setState({
              Error:null,
              isLoad:false,
              commentList:res.data
             })

        }).catch((err)=>{
          this.setState({
              Error:err.message,
              isLoad:false
           })          
        } )
    }
    eventAddCom(data){        
        axios.post("https://5b5eb1c48e9f160014b88d1e.mockapi.io/api/commentList",data).then((res)=>{
            //console.log('datass:',res.data)
            let statedd = this.state.commentList

            statedd = [...statedd,res.data]
            this.setState({
                commentList:statedd
               })
        }).catch((err)=>{
            console.log(err)
        })
        let {add} = this.props;
        add(data)
    }
    

    render(){
        let {Error,isLoad,commentList}=this.state;    
        commentList = commentList.reverse();
        let commentComponent;
        if(Error){
            commentComponent = <div className='error'> 加载失败-- Error:{Error} </div>
        }else if(isLoad){
            commentComponent = <div className='isLoad'>正在加载......</div>
        }else{
            commentComponent=(
              <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={commentList}
           
              renderItem={item => (
                <List.Item key={item.id}  >
                  <List.Item.Meta
                    title={item.userName}
                    description={`Time : ${item.time}`} 
                    />
                  {item.content}
                </List.Item>
              )}
            />
            )
        }
        return(
            <div className='Asynchronous'>
                <h2>Asynchronous</h2>
                {commentComponent}                
                <AddComment AddCom={(data)=>{this.eventAddCom(data)}} />
            </div>
        )
    }
}
export default Asynchronous;