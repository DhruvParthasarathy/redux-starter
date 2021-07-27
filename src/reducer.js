import * as actions from './actionTypes'

let lastId = 0;

export default function reducer(state = [], action) {

    if ( action.type == actions.BUG_ADDED)
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    
    else if ( action.type == actions.BUG_REMOVED)
        return state.filter(bug => bug.id !== action.payload.id)

    else if ( action.type == actions.BUG_RESOLVED){


        // We map through the state object and if the bug matched the bug which has to be reolved, we set the resolved status to true and return the array which is returned from the map function


        // We also notice that the below lines of code are difficult to read and understand, we try to maintain immutability by modifying the state object, instead we can use immutable libraries to do this task
        
        return state.map( bug => 
            bug.id != action.payload.id ? bug : {
                ...bug,
                resolved : true
            })
    }

    return state;
}