import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getCoursesFetch, createCourseFetch, deleteCourseFetch } from "../api/requests";

export function useCourses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  
  const removeCourse = (id) => {
    deleteCourseFetch(id).then(([deleteError]) => {
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
    getCoursesFetch({ q: query }).then(([coursesErr, courses]) => {
      if (courses) {
        console.log(courses)
        setCourses(courses);
      } else {
        console.log(coursesErr);
        alert("Searching course error");
      }
    });
  }

  return {
    courses,
    setCourses,
    searchQuery,
    removeCourse,
    searchCourses,
    setSearchQuery,
  };
}
