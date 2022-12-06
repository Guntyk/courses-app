import CourseCard from "./CourseCard/CourseCard";
import { useCoursesContext } from "../../../context/Courses";
import SearchBar from "./SearchBar/SearchBar";
import Button from "../../../common/Button/Button";
import { useHistory } from "react-router-dom";
import "./Courses.css";

export default function Courses() {
  const { courses, searchQuery } = useCoursesContext();
  const history = useHistory();

  return (
    <>
      <div className="row">
        <SearchBar />
        <Button
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
    </>
  );
}
