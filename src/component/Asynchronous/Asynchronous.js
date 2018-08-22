import React,{Component} from 'react'
import './Asynchronous.css'
import axios from 'axios';
import { List, Avatar, Icon } from 'antd';
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
        axios.get('http://5b5eb1c48e9f160014b88d1e.mockapi.io/api/commentList').then((res)=>{
             
        }).catch()
    }

    render(){
        const {Error,isLoad,commentList}=this.state;
        let commentComponent
        if(Error){
            commentComponent = <div className='error'> 加载失败-- Error:{Error} </div>
        }else if(isLoad){
            commentComponent = <div className='isLoad'>正在加载......</div>
        }else{
            commentComponent=(
                <div>
                   {/*  commentList.map((data,index)=>{

                    }) */}
                </div>
            )
        }
        const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
        return(
            <div className='Asynchronous'>
                <h2>Asynchronous</h2>
                <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={<div><b>ant design</b> footer part</div>}
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
            </div>
        )
    }
}
export default Asynchronous;