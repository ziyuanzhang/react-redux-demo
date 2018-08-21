import React,{Component} from 'react'
import { Rate } from 'antd';

import { Checkbox } from 'antd';
class Asynchronous extends Component{
    constructor(){
        super()
        this.state = {
            value: 3,
          }
    }

    handleChange = (value) => {
        this.setState({ value });
      }
    render(){  
        const CheckboxGroup = Checkbox.Group;
        function onChange(checkedValues) {
            console.log('checked = ', checkedValues);
          }
          const plainOptions = ['Apple', 'Pear', 'Orange'];
          let {value} =this.state;
        return(
            <div className='Asynchronous'>
                <h2>Asynchronous</h2>
                <div>
                    喜欢吃的水果：
                    <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                </div>
                <div>
                <span>
                    <Rate onChange={this.handleChange} value={value} />
                    {value && <span className="ant-rate-text">{value} stars</span>}
                </span>
                </div>
            </div>
        )
    }
}
export default Asynchronous;