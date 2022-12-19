import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/reducer";
import thunk from "redux-thunk";
import { coursesReducer } from "./courses/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { userDataReducer } from "./userData/reducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: () => [], //authorsReducer()
  userData: userDataReducer,
  counter: counterReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
