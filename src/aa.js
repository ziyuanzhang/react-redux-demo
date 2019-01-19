import { createStore, combineReducers } from "redux";
let stateAge = 0;
let reducerAge = (state = stateAge, action) => {
  switch (action.type) {
    case "addAge":
      return state + action.play;
      break;
    case "cutBack":
      return state - action.play;
    default:
      break;
  }
  console.log(action);
  return state;
};
let stateName = {
  name: "zhang"
};
let reducerName = (state = stateName, action) => {
  switch (action.type) {
    case "name":
      return {
        name: action.play
      };
      break;
    default:
      return state;
      break;
  }
};
let reducer = combineReducers({
  age: reducerAge,
  name: reducerName
});
let store = createStore(reducer);

store.subscribe(() => {
  console.log("监听:", store.getState());
});
store.dispatch({ type: "age", play: 0 });
store.dispatch({ type: "addAge", play: 1 });
store.dispatch({ type: "name", play: "li" });
