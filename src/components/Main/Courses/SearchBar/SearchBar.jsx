import { coursesSelector } from "../../../../redux/courses/selectors";
import { useCoursesContext } from "../../../../context/Courses";
import { fetchCourses } from "../../../../redux/courses/thunk";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import "./SearchBar.css";

export default function SearchBar() {
  const { setSearchQuery, searchCourses } = useCoursesContext();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(fetchCourses(e.target.search.value.trim()))
    searchCourses(e.target.search.value.trim())
    e.target.search.value = "";
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        inputClassName="search-input"
        placeholderText="Enter course name or id..."
        name="search"
      />
      <Button className="btn-primary search-btn" buttonText="Search" type="submit" />
    </form>
  );
}
