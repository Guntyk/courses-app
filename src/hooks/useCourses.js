import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  getAuthors,
  registerUser,
  loginUser,
} from "../api/requests";

export function useCourses() {
  const [authors, setAuthors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Courses Getting
    getCourses().then(([coursesErr, courses]) => {
      if (courses) {
        setCourses(courses.result);
      } else {
        console.log(coursesErr);
        alert("Getting courses error");
      }
    });
    // Authors Getting
    getAuthors().then(([authorsErr, authors]) => {
      if (authors) {
        setAuthors(authors.result);
      } else {
        console.log(authorsErr);
        alert("Getting authors error");
      }
    });
  }, []);

  // ===== User Start =====
  const register = (userObj) => {
    registerUser(userObj).then(([registrationError, registeredUser]) => {
      if (registeredUser) {
        login(userObj);
        history.replace("/");
      } else {
        console.log(registrationError);
        alert("This user is already exist");
      }
    });
  };

  const login = (userObj) => {
    loginUser(userObj).then(([loginError, loggedUser]) => {
      if (loggedUser) {
        setUser(userObj);
      } else {
        console.log(loginError);
        alert("Login error");
      }
    });
  };

  const logOut = () => {
    setUser(null);
  };
  // ===== User End =====
  // ===== Courses Start =====
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
  // ===== Courses End =====
  // ===== Authors Start =====
  // ===== Authors End =====

  return {
    user,
    authors,
    courses,
    setUser,
    addCourse,
    searchCourses,
    removeCourse,
    register,
    login,
    logOut,
  };
}
