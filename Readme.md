# Redux Basics

- [Programming with Mosh (2020) _Redux Tutorial - Learn Redux from Scratch_](https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh)

The REDUX architecture is made up of 3 components
- Action: The event which happened
- Store: The single variable state 
- Reducer : This is the event handler

When the user performs and action we create an action object and dispatch it. The store object has a dispatch method which takes in an action and forwards this action to the reducer.

We do not work with the reducer directly, the store is incharge of calling the reducer which computes the new state and returns it. The store sets the state internally and notifies the UI components about the update and these UI components will pull out the updated data and refresh themselves.

## Steps to build a Redux application

- Design the store
- Define the actions
- Creating reducers
- Setting up the store

### Designing the store

Each element in a store is called a 'slice'. Based on the number of slides, we have the number of reducers.

### Defining the actions

'type' is the only property that the redux expects in your action objects. We usually use string for the type property. String is preferred as this is descriptive, easily serializable and can be stored on the disc. Redux is built on the principle that we should be able to store the state of the application on the disc and reload from it later.
 
_Example actions:_

```

{ 
    type: "bugAdded",
    payload: {
        description: "..."
    }
    
}

{
    type: "bugRemoved",
    payload: {
        id: 1
    }
}

```

### Defining the implementation for a new action

Step1 : Define the action variable in the actionTypes.js file
Step2 : Define the action payload in the actions.js file
Step3 : Define the action's business logic in the reducer.js file