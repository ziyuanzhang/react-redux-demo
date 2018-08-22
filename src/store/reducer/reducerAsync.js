let initialState={
    commentList:[]
}
let reducerAsync =(state=initialState,action)=>{
    switch (action.type) {
        case 'AddComment':
            return Object.assign([],...state,action.value)
        default:
           return state;
    }

}
export default reducerAsync;