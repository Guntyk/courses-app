import { LOGIN, LOGOUT, REGISTRATION } from "./actionTypes";

export function loginAction(payload) {
  return { type: LOGIN, payload };
}
export function logoutAction(payload) {
  return { type: LOGOUT, payload };
}
export function registrationAction(payload) {
  return { type: REGISTRATION, payload };
}
