import { createStore, combineReducers } from "redux"
import {bugReducer, cakeReducer} from './reducer'


// before we create out store we combine the various reducers
const rootReducer = combineReducers({
    bug: bugReducer,
    cake: cakeReducer
    
})
const store = createStore(rootReducer)

export default store;

