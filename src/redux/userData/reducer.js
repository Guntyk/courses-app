import { LOGIN, LOGOUT } from "./actionTypes";

const defaultState = {
  isAuth: false,
  name: "",
  email: "",
  token: "",
};

export function userDataReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        isAuth: true,
        name: action.payload.user.name,
        email: action.payload.user.email,
        token: action.payload.result,
      };
    case LOGOUT:
      return { ...action.payload };
    default:
      return state;
  }
}
