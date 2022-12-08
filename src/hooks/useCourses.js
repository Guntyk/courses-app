import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  loginUser,
  logoutUser,
  getAuthors,
  getCourses,
  createCourse,
  deleteCourse,
  createAuthor,
  registerUser,
} from "../api/requests";

export function useCourses() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const token = JSON.parse(localStorage.getItem("userToken"));
  const [searchQuery, setSearchQuery] = useState("");
  const [authors, setAuthors] = useState([]);
  const [courses, setCourses] = useState([]);
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
    registerUser(userObj).then(([registrationErr, registeredUser]) => {
      if (registeredUser) {
        login(userObj);
      } else {
        console.log(registrationErr);
        alert("Registration error");
        history.replace("/login");
      }
    });
  };

  const login = (userObj) => {
    loginUser(userObj).then(([loginErr, loggedUser]) => {
      if (loggedUser) {
        localStorage.setItem("userToken", JSON.stringify(loggedUser.result));
        localStorage.setItem("user", JSON.stringify(userObj));
        setUser(userObj);
        history.replace("/courses");
      } else {
        console.log(loginErr);
        alert("Login error");
      }
    });
  };

  const logout = () => {
    logoutUser(token).then(([logoutErr]) => {
      if (!logoutErr) {
        localStorage.removeItem("userToken");
        localStorage.removeItem("user");
        setUser({});
        history.replace("/login");
      } else {
        console.log(logoutErr);
        alert("Logout error");
      }
    });
  };
  // ===== User End =====
  // ===== Courses Start =====
  const addCourse = (courseObj) => {
    createCourse(courseObj).then(([createCourseError, createdCourse]) => {
      if (createdCourse) {
        setCourses((prevCourses) => [...prevCourses, courseObj]);
        history.push("/courses");
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
  const addAuthor = (authorObj) => {
    createAuthor(authorObj).then(([createAuthorError, createdAuthor]) => {
      if (createdAuthor) {
        setAuthors((prevAuthors) => [...prevAuthors, authorObj]);
      } else {
        console.log(createAuthorError);
        alert("Creating author error");
      }
    });
  };
  // ===== Authors End =====

  return {
    user,
    login,
    token,
    logout,
    authors,
    courses,
    setUser,
    register,
    addAuthor,
    addCourse,
    setAuthors,
    setCourses,
    searchQuery,
    removeCourse,
    searchCourses,
    setSearchQuery,
  };
}
