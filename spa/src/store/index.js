import { applyMiddleware, combineReducers, createStore } from 'redux'
import albumsReducer from './albums/albumsReduser'
import usersReducer from './users/usersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  albums: albumsReducer,
  users: usersReducer,
})
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
