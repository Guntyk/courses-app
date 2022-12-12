import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { counterReducer } from "./counter/reducer"

const rootReducer = combineReducers({
    courses: () => [], //corsesReducer(),
    authors: () => [], //authorsReducer()
    userData: () => ({}), //userDataReducer()
    counter: counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
