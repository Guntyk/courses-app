import { useState } from "react";
import { getCoursesFetch } from "../api/requests";

export function useCourses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);

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
    searchCourses,
    setSearchQuery,
  };
}
