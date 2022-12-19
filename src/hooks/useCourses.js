import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getCourses, createCourse, deleteCourse } from "../api/requests";

export function useCourses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);


  

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
