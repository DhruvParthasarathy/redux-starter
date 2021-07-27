import store from './store'

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

store.dispatch(
    {
        type: "bugAdded",
        payload: {
            description:"Bug1"
        }
    }
)

unsubscribe()


/**
 * Given that we have unsubscribed above, the below dispatch event will happen, but the callback of the subscribe method will not be called
 */
store.dispatch(
    {
        type: 'bugRemoved',
        payload: {
            id: 1
        }
    }
)

console.log(store.getState());