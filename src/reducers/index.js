import {combineReducers} from 'redux'
import {badgeReducer} from './badgeReducer'

export default combineReducers({
    badgeList: badgeReducer
})