import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {testReducer} from "./testReducer";
import thunkMiddleware from "redux-thunk"


const reducers = combineReducers({
    test: testReducer,

})


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;

export default store;