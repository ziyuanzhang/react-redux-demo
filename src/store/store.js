import { combineReducers, createStore } from "redux";
import reducerSync from "./reducer/reducerSync";
import reducerAsync from './reducer/reducerAsync';

let reducers = combineReducers({
    reducerSync,
    reducerAsync
})
let store = createStore(reducers)

export default store;