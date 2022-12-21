import {
  CREATE_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
  GET_COURSES,
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
      return;
    default:
      return state;
  }
}
