let initialState={
    commentList:[]
}
let reducerAsync =(state=initialState,action)=>{
    switch (action.type) {
        case 'PUT':
            return Object.assign({},state,action)
        default:
           return state;
    }

}
export default reducerAsync;