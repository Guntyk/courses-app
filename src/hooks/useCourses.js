import { useState, useEffect } from "react";
import {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
} from "../api/requests";

export function useCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(([coursesErr, courses]) => {
      if (courses) {
        setCourses(courses.result);
      } else {
        console.log(coursesErr);
        alert("Getting courses error");
      }
    });
  }, []);

  const addCourse = (courseObj) => {
    createCourse(courseObj).then(([createCourseError, createdCourse]) => {
      if (createdCourse) {
        setCourses((prevCourses) => [...prevCourses, createdCourse]);
      } else {
        console.log(createCourseError);
        alert("Creating course error");
      }
    });
  };

  const removeCourse = (id) => {
    deleteCourse(id).then(([deleteError]) => {
      if (deleteError) {
        console.log(deleteError);
        alert("Deleting course error!");
      } else {
        const newCourses = courses.filter((course) => course.id !== id);
        setCourses(newCourses);
      }
    });
  };

  function searchCourses(query) {
    getCourses({ q: query }).then(([coursesErr, courses]) => {
      if (courses) {
        setCourses(courses);
      } else {
        console.log(coursesErr);
        alert("Searching course error");
      }
    });
  }
}
