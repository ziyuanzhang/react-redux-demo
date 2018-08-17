
let initialState={
    title:'测试标题',
    list:['test1','test2']
  }
  let reducerApp =(state=initialState,action)=>{
    switch (action.type) {
      case 'ADD':
        state.list =[...state.list,action.value];
        return Object.assign({},state);
        break;
      case 'DEL':
        state.list.splice(action.index,1);
        return Object.assign({},state);
        break;
    
      default:
        return state
        break;
    }
  }
  export default reducerApp