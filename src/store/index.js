import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import users from './reducers/users'

const reducers = combineReducers({
  users: users
})

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger))

export default store