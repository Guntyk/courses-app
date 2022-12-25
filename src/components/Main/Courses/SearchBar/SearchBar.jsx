import { searchCoursesAction } from "../../../../redux/courses/actionCreators";
import { coursesSelector } from "../../../../redux/courses/selectors";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const courses = useSelector(coursesSelector);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value.trim());
    dispatch(searchCoursesAction(e.target.search.value.trim()));
    e.target.search.value = "";
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        inputClassName="search-input"
        placeholderText="Enter course name or id..."
        name="search"
      />
      <Button
        className="btn-primary search-btn"
        buttonText="Search"
        type="submit"
      />
    </form>
  );
}
