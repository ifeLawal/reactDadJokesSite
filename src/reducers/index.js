import { combineReducers } from 'redux'
import counterReducer from './counter'
import quotesReducerNew from './quotes'

// rewrite this as a single reducer so you can access array length
// export default combineReducers({
//     counterReducer,
//     quotesReducerNew
// })

export default quotesReducerNew;