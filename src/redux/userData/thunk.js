import {
  getCurrentUserFetch,
  loginUserFetch,
  logoutUserFetch,
  registerUserFetch,
} from "../../api/requests";
import { getUserAction, loginAction, logoutAction } from "./actionCreators";

export function login(userObj, history) {
  return (dispatch) => {
    loginUserFetch(userObj).then(([loginErr, loggedUser]) => {
      if (loggedUser) {
        window.localStorage.setItem("userToken", loggedUser.result);
        dispatch(loginAction(loggedUser));
        history.replace("/courses");
      } else {
        console.log(loginErr);
        alert("Login error");
      }
    });
  };
}

export function logout(token, history) {
  return (dispatch) => {
    logoutUserFetch(token).then(([logoutErr]) => {
      if (!logoutErr) {
        window.localStorage.removeItem("userToken");
        window.localStorage.removeItem("username");
        dispatch(logoutAction());
        history.replace("/login");
      } else {
        console.log(logoutErr);
        alert("Logout error");
      }
    });
  };
}

export function register(userObj, history) {
  return (dispatch) => {
    registerUserFetch(userObj).then(([registrationErr, registeredUser]) => {
      if (registeredUser) {
        dispatch(login(userObj, history));
      } else {
        console.log(registrationErr);
        alert("Registration error");
        history.replace("/login");
      }
    });
  };
}

export function getUser() {
  return (dispatch) => {
    getCurrentUserFetch().then(([gettingUserError, userObj]) => {
      if (userObj) {
        console.log(userObj.result);
        dispatch(getUserAction(userObj.result));
      } else {
        console.log(gettingUserError);
        alert("Getting user error");
      }
    });
  };
}
