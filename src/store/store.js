import { combineReducers, createStore } from "redux";
import reducerApp from "./reducer/reducerApp";
import reducerTest from './reducer/reducerTest'

let reducers = combineReducers({
    reducerApp,
    reducerTest
})
let store = createStore(reducers)

export default store;