import {connect} from 'react-redux';
import Synchronize from '../component/Synchronize/Synchronize'
import Action from '../action/action'



let mapStateToProps=(state) =>({
     reducerSync:state.reducerSync
});
let mapDispatchToProps=(dispatch,ownsProp)=>({
    add:(value)=>{dispatch({type:Action.ADD,value})},
    del:(index)=>{dispatch({type:Action.DEL,index})}
})

let SynchronizeS = connect(mapStateToProps,mapDispatchToProps)(Synchronize)

export default SynchronizeS;