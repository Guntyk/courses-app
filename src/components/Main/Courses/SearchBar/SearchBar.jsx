import { useCoursesContext } from "../../../../context/Courses";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import "./SearchBar.css";

export default function SearchBar() {
  const { setSearchQuery } = useCoursesContext();

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(e.target.search.value.trim());
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
