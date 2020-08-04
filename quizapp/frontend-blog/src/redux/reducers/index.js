import {combineReducers} from 'redux'
import userReducer from 'redux/reducers/userReducer'
import commentReducer from 'redux/reducers/commentReducer'

const rootReducer = combineReducers({
    userReducer,
    commentReducer
})

export default rootReducer;
