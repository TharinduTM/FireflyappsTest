import { combineReducers } from 'redux'
import cardReducer from './AddCardReducer'

const rootReducer=combineReducers({
    cards: cardReducer,
})

export default rootReducer
