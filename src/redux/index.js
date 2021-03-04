// import nessasary
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import  reducers
import { CounterReducer, userReducer } from "./reducers";

const allReducers = combineReducers({
  user: userReducer,
  counter: CounterReducer,
});
const middleware = [thunk];

const initGlobalState = {
  user: {
    name: "",
    image:"",
  },
  counter: {
    value: 0,
  },
};

const store = createStore(
  allReducers,
  // pass init state , if you want or in proivder,
  initGlobalState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
