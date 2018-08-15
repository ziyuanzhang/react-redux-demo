import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
  render() {
    let {title,list} = this.props.reducerApp
    let {add,del} =this.props;
    return (
      <div className="App">
      <h1>{title}</h1>
         <ul>
           {
             list.map((value,index)=>{
               return (
                   <li key={index}>  {value} : <button onClick={()=>{del(index)}}>del</button>  </li>
                )
             })
           }
         </ul>
        <hr/>
        <label><input ref={inp =>{this.inp=inp}} type="text"/></label>
        <button onClick={()=>{add(this.inp.value)}}>click</button>
      </div>
    );
  }
}

export default App;
