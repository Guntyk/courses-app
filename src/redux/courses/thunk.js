import {
  createCourseAction,
  deleteCoursesAction,
  getCoursesAction,
} from "./actionCreators";
import {
  createCourseFetch,
  deleteCourseFetch,
  getCoursesFetch,
  searchCourseFetch,
} from "../../api/requests";

export function fetchCourses() {
  return (dispatch) => {
    getCoursesFetch().then(([coursesErr, courses]) => {
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
    console.log(courseObj)
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
