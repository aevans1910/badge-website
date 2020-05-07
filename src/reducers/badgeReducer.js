import { TOGGLE_BADGE } from '../actions/index'

const badgeReducer = (state = {}, action) => {
    switch(action.type) {
        case TOGGLE_BADGE:
            const newState = {...state}
            if (newState[action.id] === undefined) {
                newState[action.id] = true
                return newState
            }
            delete newState[action.id]
            return newState
        default:
            return state
    }
}

export default badgeReducer