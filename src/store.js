import { createStore, combineReducers, applyMiddleware } from "redux"
import {bugReducer, cakeReducer} from './reducer'
import {createLogger} from 'redux-logger'



// before we create out store we combine the various reducers
const rootReducer = combineReducers({
    bug: bugReducer,
    cake: cakeReducer
    
})

// Here while creating the store, we also implement other middleware to the store, thereby extending it's functionality.
// In the below example we have applied a logger to the store, therefore for every action that happens, a log is generated. 
const store = createStore(rootReducer, applyMiddleware(createLogger()))

export default store;

