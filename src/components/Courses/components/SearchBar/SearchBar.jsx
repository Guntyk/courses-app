import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import "./SearchBar.css"

export default function SearchBar({ setSearchQuery }) {
  return (
    <form action="#" className="form">
      <Input
        inputClassName="search-input"
        placeholderText="Enter course name or id..."
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <Button buttonText="Search" type="submit" />
    </form>
  );
}
