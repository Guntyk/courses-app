import CourseCard from "./components/CourseCard/CourseCard";
import { useCoursesContext } from "../../context/Courses";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/Button";
import "./Courses.css";

export default function Courses() {
  const { courses, searchQuery } = useCoursesContext();

  return (
    <>
      <div className="row">
        <SearchBar />
        <Button buttonText="Add new course" onClick={() => {}} />
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
