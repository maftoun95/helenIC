import { combineReducers } from 'redux'

import userReducer from './userReducer';
import viewReducer from './viewReducer'
const rootReducer = combineReducers({
	userReducer,
	viewReducer
})
export default rootReducer;