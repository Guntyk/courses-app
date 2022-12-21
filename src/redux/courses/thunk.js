import { createCourseFetch, getCoursesFetch } from "../../api/requests";
import { createCourseAction, getCoursesAction } from "./actionCreators";

export function fetchCourses(query) {
  return (dispatch) => {
    getCoursesFetch({ q: query }).then(([coursesErr, courses]) => {
      if (courses) {
        dispatch(getCoursesAction(courses.result));
      } else {
        console.log(coursesErr);
        alert("Getting courses error");
      }
    });
  };
}

export function createCourse(courseObj, history) {
  return (dispatch) => {
    createCourseFetch(courseObj).then(([createCourseError, createdCourseData]) => {
      if (createdCourseData) {
        dispatch(createCourseAction(createdCourseData.result));
        history.push("/courses");
      } else {
        console.log(createCourseError);
        alert("Creating course error");
      }
    });
  };
}
