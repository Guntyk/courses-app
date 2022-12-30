import { GET_USER, LOGIN, LOGOUT } from "./actionTypes";

const defaultState = {
  isAuth: false,
  name: "",
  email: "",
  token: window.localStorage.getItem("userToken"),
};

export function userDataReducer(state = defaultState, action) {
  console.log(action)
  switch (action.type) {
    case LOGIN:
      return {
        isAuth: true,
        name: action.payload.user.name,
        email: action.payload.user.email,
        token: action.payload.result,
      };
    case GET_USER:
      console.log(action.payload)
      return {
        isAuth: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
}
