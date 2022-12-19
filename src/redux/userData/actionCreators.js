import { LOGIN, LOGOUT } from "./actionTypes";

export function loginAction(payload) {
  return { type: LOGIN, payload };
}
export function logoutAction(payload) {
  return { type: LOGOUT, payload };
}
