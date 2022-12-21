import {
  CREATE_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
  GET_COURSES,
} from "./actionTypes";

export function getCoursesAction(payload) {
  return { type: GET_COURSES, payload };
}
export function createCourseAction(payload) {
  return { type: CREATE_COURSE, payload };
}
export function editCoursesAction(payload) {
  return { type: EDIT_COURSE, payload };
}
export function deleteCoursesAction(payload) {
  return { type: DELETE_COURSE, payload };
}
