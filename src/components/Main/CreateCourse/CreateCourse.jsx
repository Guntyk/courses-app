import { useCoursesContext } from "../../../context/Courses";
import { pipeDuration } from "../../../helpers/pipeDuration";
import Button from "../../../common/Button/Button";
import { useHistory } from "react-router-dom";
import Input from "../../../common/Input/Input";
import { useState } from "react";
import "./CreateCourse.css";

export default function CreateCourse() {
  const history = useHistory();
  const { addCourse, setCourses, authors, setAuthors } = useCoursesContext();
  const [courseAuthors, setCourseAuthors] = useState([]);

  const [duration, setDuration] = useState(0);

  function createCourse(e) {
    e.preventDefault();
    console.log(courseAuthors)
    const newCourse = {
      title: e.target.title.value.trim(),
      description: e.target.description.value.trim(),
      duration: Number(duration),
      authors: courseAuthors,
    };
    if (authors.length === 0 || duration === 0) {
      alert("Please, fill in all fields");
      return;
    }
    addCourse(newCourse);
    history.goBack();
  }

  // ===== Authors Start =====
  function createAuthor(e) {
    e.preventDefault();
    const newAuthor = {
      // id: v4(),
      name: e.target.name.value.trim(),
    };
    // setAuthorsList((prevAuthorsList) => [...prevAuthorsList, newAuthor]);
  }

  const addCourseAuthor = (author) => {
    setCourseAuthors((prevCoursesAuthors) => [...prevCoursesAuthors, author]);
    setAuthors(authors.filter((authorBase) => author.id !== authorBase.id));
  };

  const removeCourseAuthor = (author) => {
    setAuthors((prevAuthors) => [...prevAuthors, author]);
    setCourseAuthors(
      courseAuthors.filter((authorBase) => author.id !== authorBase.id)
    );
  };
  // ===== Authors End =====

  return (
    <>
      <form onSubmit={createCourse}>
        <div className="row">
          <Input
            placeholderText="Enter title..."
            labelText="Title"
            minLength="2"
            name="title"
            required
          />
          <Button
            className="create-course-btn"
            buttonText="Create course"
            type="submit"
          />
        </div>
        <Input
          labelClassName="create-description-label"
          inputClassName="create-description-input"
          placeholderText="Enter description"
          labelText="Description"
          name="description"
          textarea
          required
        />
      </form>
      <div className="details">
        <div className="create-column">
          <form className="block add-author" onSubmit={createAuthor}>
            <h3 className="creation-title">Add author</h3>
            <Input
              placeholderText="Enter author name..."
              labelText="Author name"
              name="authorName"
              required
              min="2"
            />
            <Button
              className="create-author-button"
              buttonText="Create author"
              type="submit"
            />
          </form>
          <div className="block duration">
            <h3 className="creation-title">Duration</h3>
            <Input
              placeholderText="Enter duration in minutes..."
              labelText="Duration"
              type="number"
              onChange={(e) => {setDuration(e.target.value.trim())}}
              required
            />
            <span className="duration-result">
              Duration:{" "}
              <span className="time">
                {duration ? pipeDuration(duration) : "00:00"}
              </span>{" "}
              hours
            </span>
          </div>
        </div>
        <div className="create-column">
          <h3 className="creation-title">Authors</h3>
          <ul className="available-authors-list">
            {authors.length === 0 ? (
              <span className="void">Authors list is empty</span>
            ) : (
              authors.map((author) => (
                <li className="available-author" key={author.id}>
                  <span className="name">{author.name}</span>
                  <Button
                    buttonText="Add author"
                    onClick={() => addCourseAuthor(author)}
                  />
                </li>
              ))
            )}
          </ul>
          <h3 className="creation-title">Course authors</h3>
          <ul className="available-authors-list">
            {courseAuthors.length === 0 ? (
              <span className="void">Author list is empty</span>
            ) : (
              courseAuthors.map((author) => (
                <li className="available-author" key={author.id}>
                  <span className="name">{author.name}</span>
                  <Button
                    buttonText="Delete author"
                    onClick={() => removeCourseAuthor(author)}
                  />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
