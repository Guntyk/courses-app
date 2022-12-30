import { GET_USER, LOGIN, LOGOUT } from "./actionTypes";

export function loginAction(payload) {
  return { type: LOGIN, payload };
}
export function logoutAction() {
  return { type: LOGOUT };
}
export function getUserAction(payload) {
  console.log(payload);
  return { type: GET_USER, payload };
}
