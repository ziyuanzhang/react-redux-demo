import {connect} from 'react-redux';
import App from '../component/App';
import Action from '../action/action'



let mapStateToProps=(state) =>({
     reducerApp:state.reducerApp
});
let mapDispatchToProps=(dispatch,ownsProp)=>({
    add:(value)=>{dispatch({type:Action.ADD,value})},
    del:(index)=>{dispatch({type:Action.DEL,index})}
})

let Apps = connect(mapStateToProps,mapDispatchToProps)(App)

export default Apps;