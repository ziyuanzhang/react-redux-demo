import React,{Component} from 'react'
import { Button } from 'antd';
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className='Home'>
                <h2>Home</h2>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}
export default Home;