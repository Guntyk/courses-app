import { CREATE_AUTHOR, GET_AUTHORS } from "./actionTypes";

const defaultState = [];

export function authorsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_AUTHORS:
      return [...action.payload];
    case CREATE_AUTHOR:
      return [...state, action.payload];
    default:
      return state;
  }
}
