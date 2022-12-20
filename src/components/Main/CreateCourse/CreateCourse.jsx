import { fetchAuthors, createAuthor } from "../../../redux/authors/thunk";
import { authorsSelector } from "../../../redux/authors/selectors";
import { pipeDuration } from "../../../helpers/pipeDuration";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./CreateCourse.css";
import { useEffect } from "react";

export default function CreateCourse() {
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [authorsList, setAuthorsList] = useState([]);
  const authors = useSelector(authorsSelector);
  const [duration, setDuration] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = window.localStorage.getItem("userToken");

  useEffect(() => {
    updateAuthors();
  }, []);

  function updateAuthors() {
    console.log("Update");
    dispatch(fetchAuthors());
    setAuthorsList([].concat(authors));
  }

  if (
    authors.length !== 0 &&
    authorsList.length === 0 &&
    courseAuthors.length === 0
  ) {
    updateAuthors()
  }

  function createCourse(e) {
    e.preventDefault();
    const newCourse = {
      title: e.target.title.value.trim(),
      description: e.target.description.value.trim(),
      duration: Number(duration),
      authors: courseAuthors.map((courseAuthor) => courseAuthor.id),
    };
    if (authors.length === 0 || duration === 0) {
      alert("Please, fill in all fields");
      return;
    }
    // addCourse(newCourse);
  }

  // ===== Authors Functions =====
  function addAuthor(e) {
    e.preventDefault();
    const newAuthor = {
      name: e.target.name.value.trim(),
    };
    console.log("Add");
    e.target.name.value = "";
    dispatch(createAuthor(newAuthor, token));
    updateAuthors();
  }

  const addCourseAuthor = (author) => {
    setCourseAuthors((prevCoursesAuthors) => [...prevCoursesAuthors, author]);
    setAuthorsList(
      authorsList.filter((authorBase) => author.id !== authorBase.id)
    );
  };

  const removeCourseAuthor = (author) => {
    setAuthorsList((prevAuthors) => [...prevAuthors, author]);
    setCourseAuthors(
      courseAuthors.filter((authorBase) => author.id !== authorBase.id)
    );
  };

  return (
    <>
      <form className="create-course-form" onSubmit={createCourse}>
        <div className="row">
          <Input
            placeholderText="Enter title..."
            labelText="Title"
            minLength="2"
            name="title"
            required
          />
          <Button
            className="btn-primary create-course-btn"
            buttonText="Create course"
            type="submit"
          />
        </div>
        <Input
          labelClassName="create-description-label"
          inputClassName="create-description-input"
          placeholderText="Enter description..."
          labelText="Description"
          name="description"
          textarea
          required
        />
      </form>
      <div className="details">
        <div className="create-column">
          <form className="block add-author" onSubmit={addAuthor}>
            <h3 className="creation-title">Add author</h3>
            <Input
              inputClassName="details-input"
              placeholderText="Enter author name..."
              labelText="Author name"
              name="name"
              required
              min="2"
            />
            <Button
              className="btn-secondary create-author-button"
              buttonText="Create author"
              type="submit"
            />
          </form>
          <div className="block duration">
            <h3 className="creation-title">Duration</h3>
            <Input
              inputClassName="details-input duration-input"
              placeholderText="Enter duration in minutes..."
              labelText="Duration"
              type="number"
              onChange={(e) => {
                setDuration(e.target.value.trim());
              }}
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
            {authorsList.length === 0 ? (
              <span className="void">Authors list is empty</span>
            ) : (
              authorsList.map((author) => (
                <li className="available-author" key={author.id}>
                  <span className="name">{author.name}</span>
                  <Button
                    className="btn-secondary author-btn"
                    buttonText="Add"
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
                    className="btn-secondary author-btn"
                    buttonText="Delete"
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
