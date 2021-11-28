import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import products from "redux/modules/products";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";

const env = process.env.NODE_ENV;
const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "dev") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  products,
  routing: routerReducer,
});

let store;

if (env === "dev") {
  store = (
    initialState //리듀서, middleware 적용
  ) =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = (initialState) =>
    createStore(reducer, applyMiddleware(...middlewares));
}

export { history };
export default store();
