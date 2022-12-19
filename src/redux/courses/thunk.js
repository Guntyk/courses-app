import { useHistory } from "react-router-dom";
import { createCourse, getCourses } from "../../api/requests";
import { createCourseAction, getCoursesAction } from "./actionCreators";

export function fetchCourses(query) {
  return (dispatch) => {
    getCourses({ q: query }).then(([coursesErr, courses]) => {
      if (courses) {
        dispatch(getCoursesAction(courses.result));
      } else {
        console.log(coursesErr);
        alert("Getting courses error");
      }
    });
  };
}

export function addCourse(courseObj) {
  return (dispatch) => {
    createCourse(courseObj).then(([createCourseError, createdCourseData]) => {
      if (createdCourseData) {
        console.log(createdCourseData);
        dispatch(createCourseAction(createdCourseData.result));
        // history.push("/courses");
      } else {
        console.log(createCourseError);
        alert("Creating course error");
      }
    });
  };
}
