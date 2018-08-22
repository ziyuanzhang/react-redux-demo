import {connect} from 'react-redux';
import AddInp from '../component/Synchronize/AddInp';
import Action from '../action/action';
let mapStateToProps=(state) =>({
    //reducerSync:state.reducerSync
});
let mapDispatchToProps=(dispatch,ownsProp)=>({
    add:(value)=>{dispatch({type:Action.ADD,value})}
})

let AddInpS = connect(mapStateToProps,mapDispatchToProps)(AddInp)

export default AddInpS;