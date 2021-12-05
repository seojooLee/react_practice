//루트 리덕스
import { combineReducers } from "redux";
import CounterMiddleware from "./counter";
const rootReducer = combineReducers({ CounterMiddleware });

export default rootReducer;
