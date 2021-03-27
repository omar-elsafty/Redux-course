import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'
import logger from 'redux-logger'




export default configureStore({
    reducer: rootReducer,


    //getDefaultMiddleware
    //Returns an array containing the default list of middleware.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were composed together