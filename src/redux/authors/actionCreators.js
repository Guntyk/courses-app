import { CREATE_AUTHOR, GET_AUTHORS } from "./actionTypes";

export function getAuthorsAction(payload) {
    return { type: GET_AUTHORS, payload }
}
export function createAuthorAction(payload) {
    return { type: CREATE_AUTHOR, payload }
}