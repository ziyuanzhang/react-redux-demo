import {connect} from "react-redux";
import Action from '../action/action';
import Asynchronous from "../component/Asynchronous/Asynchronous";

//import axios from 'axios';

let mapStateToProps=(state)=>({
    reducerAsync:state.reducerAsync
});
let mapDispatchToProps=(dispatch,ownsProp)=>({
    add:(value)=>{
        /* axios.post("https://5b5eb1c48e9f160014b88d1e.mockapi.io/api/commentList",value).then((res)=>{
            //console.log('datass:',res.data)
            let value = res.data;
            dispatch({type:Action.AddComment,value})
        }).catch((err)=>{
            console.log(err)
        }) */
        
       
        dispatch({type:Action.AddComment,value})
    
    }
})
let AsynchronousS = connect(mapStateToProps,mapDispatchToProps)(Asynchronous)

export default AsynchronousS;

