import {
  createCourseAction,
  deleteCoursesAction,
  getCoursesAction,
} from "./actionCreators";
import { coursesSelector } from "./selectors";
import { useSelector } from "react-redux";
import {
  createCourseFetch,
  deleteCourseFetch,
  getCoursesFetch,
} from "../../api/requests";

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
    createCourseFetch(courseObj).then(
      ([createCourseError, createdCourseData]) => {
        if (createdCourseData) {
          dispatch(createCourseAction(createdCourseData.result));
          history.push("/courses");
        } else {
          console.log(createCourseError);
          alert("Creating course error");
        }
      }
    );
  };
}

export function deleteCourse(id) {
  return (dispatch) => {
    deleteCourseFetch(id).then(([deleteError]) => {
      if (deleteError) {
        console.log(deleteError);
        alert("Deleting course error!");
      } else {
        dispatch(deleteCoursesAction(id));
      }
    });
  };
}
