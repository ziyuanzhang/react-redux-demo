import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Menu } from 'antd';


class Headers extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            current: window.location.pathname
          }  
    }
    componentDidMount(){
        console.log(this)
    }
  
      handleClick = (e) => {
       // console.log('click ', e);
        this.setState({
          current: e.key,
        });
      } 
    render(){
        return(
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="/">
                    <NavLink exact className="blue"  to='/'>home</NavLink>
                </Menu.Item>
                <Menu.Item key="/Synchronize" >
                    <NavLink className="blue" activeClassName='active' to='/Synchronize'>Synchronize</NavLink>
                </Menu.Item>
                <Menu.Item key="/Asynchronous" >
                    <NavLink className="blue" activeClassName='active' to='/Asynchronous'>Asynchronous</NavLink>
                </Menu.Item>
            </Menu>
        )
    }

}

export default Headers;