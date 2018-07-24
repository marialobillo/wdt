## Exercises

> An alternative approach to state management is to use a portable state container like Redux. Read the Motivation section of Redux's documentation. In your checkpoint submission, explain the pros and cons of Redux.

A:
Redux Pros:
- Redux implements structure flow by separating the logic of saving data into three steps of actin, reducer, and store.
- Redux is good for unit testing.
- Although you have only one store, you have multiple reductions and you can organize them in a hierarchical way.
- Redux is a very light library, only 1.9 Kb.
- Predictability and simplicity
- Unidirectional data flow and immutability
- Separation of data and presentation
- Extensibility (via middlewares)
- Popularity and community
- Tooling support

Redux Cons:
- In a large application, when two components would require a common data you have to move that data to closest ancestor. This can make you keep unintended data in non-related components.
- Hard to debug.
- Boilerplate (views, action types, action creators, reducers, selectors, …)
- No out-of-the-box solution for dealing with side-effects (available through middlewares such as redux-thunk or redux-saga)
- Actions are disconnected from their effect (which is defined in the reducer)
