import { coursesSelector } from "../../../redux/courses/selectors";
import { useCoursesContext } from "../../../context/Courses";
import { fetchAuthors } from "../../../redux/authors/thunk";
import { fetchCourses } from "../../../redux/courses/thunk";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../common/Button/Button";
import CourseCard from "./CourseCard/CourseCard";
import SearchBar from "./SearchBar/SearchBar";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import "./Courses.css";

export default function Courses() {
  // const { searchQuery } = useCoursesContext();
  const courses = useSelector(coursesSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  const searchQuery = "";

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchAuthors())
  }, []);

  return (
    <>
      <main className="main">
        <div className="row">
          <SearchBar />
          <Button
            className="btn-primary add-course-btn"
            buttonText="Add new course"
            onClick={() => {
              history.push("/courses/add");
            }}
          />
        </div>
        <article className="courses">
          {courses.length === 0 ? (
            <h2>No courses yet</h2>
          ) : (
            courses
              .filter((course) =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((course) => <CourseCard course={course} key={course.id} />)
          )}
        </article>
      </main>
    </>
  );
}
