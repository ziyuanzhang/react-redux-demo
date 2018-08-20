
let initialState={
    title:'测试标题',
    list:['test1','test2']
  }
  let reducerSync =(state=initialState,action)=>{
    switch (action.type) {
      case 'ADD':
        state.list =[...state.list,action.value];
        return Object.assign({},state);
        
      case 'DEL':
        state.list.splice(action.index,1);
        return Object.assign({},state);
    
      default:
        return state
    }
  }
  export default reducerSync