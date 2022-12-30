import {
  CREATE_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
  GET_COURSES,
  SEARCH_COURSES,
} from "./actionTypes";

const defaultState = [];

export function coursesReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_COURSES:
      return [...action.payload];
    case CREATE_COURSE:
      return [...state, action.payload];
    case EDIT_COURSE:
      return;
    case DELETE_COURSE:
      return state.filter((course) => course.id !== action.payload);
    case SEARCH_COURSES:
      console.log(state);
      console.log(action.payload);
      return state.filter((course) => course.title.includes(action.payload));
    default:
      return state;
  }
}
