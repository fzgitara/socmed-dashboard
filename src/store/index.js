import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import users from './reducers/users'
import posts from './reducers/posts'
import albums from './reducers/albums'
import photos from './reducers/photos'

const reducers = combineReducers({
  users: users,
  posts: posts,
  albums: albums,
  photos: photos
})

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger))

export default store