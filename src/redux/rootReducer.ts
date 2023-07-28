import { combineReducers } from "redux"

// reducers
import user from './user/slice'

/* The code is exporting a combined reducer function using the `combineReducers` function from the
`redux` library. */
export default combineReducers({
  user,
})
