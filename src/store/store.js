import { combineReducers, createStore } from "redux";
import reducerSync from "./reducer/reducerSync";
import reducerTest from './reducer/reducerTest'

let reducers = combineReducers({
    reducerSync,
    reducerTest
})
let store = createStore(reducers)

export default store;