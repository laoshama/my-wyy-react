import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import cReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhancer = applyMiddleware(thunk)

const store = createStore(cReducer, composeEnhancers(storeEnhancer))


export {
    store
}