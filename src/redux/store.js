import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userDataReducer } from "./userData/reducer";
import { counterReducer } from "./counter/reducer";
import { coursesReducer } from "./courses/reducer";
import { authorsReducer } from "./authors/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: authorsReducer,
  userData: userDataReducer,
  counter: counterReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
