import store from './store'
import {bugAdded , bugRemoved, bugResolved, cakeOrdered} from './actions'


/**
 * the subscribe method of the store acts as a listener to the store and whenever the store's state changes, this function defined inside it gets triggered, a console.log in this case
 */

// store.subscribe( () => {
//     console.log("Store changed", store.getState())
// })

/**
 * store.subscribe also returns a function which when called removes the listener from the store, thereby preventing durther dispatch events from being listened to, but the dispatch event is still processed
 */
const unsubscribe = store.subscribe( () => {
    console.log("Store change listened ===========>", store.getState())
})

store.dispatch(bugAdded('Bug 1'))

// unsubscribe()



/**
 * Given that we have unsubscribed above, the below dispatch event will happen, but the callback of the subscribe method will not be called
 */

store.dispatch(bugResolved(1))

store.dispatch(bugRemoved(1))

store.dispatch(cakeOrdered()) // number of cakes will become 9

store.dispatch(cakeOrdered()) // number of cakes will become 8

console.log(store.getState());

/**
 * One problem which we can notice in the above implementation is that for every action which we have to dispatch we have to recrete the entire action object. Hence to handle this we have a new file called as actions.js
 */