//루트 리듀서 만들기
import { combineReducers } from "redux";
import counter from "./modules/counter";
import todos from "./modules/todos";
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
