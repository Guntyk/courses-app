import { useState } from 'react';
import { v4 } from 'uuid';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { mockedAuthorsList } from '../../constants';
import { pipeDuration } from '../../helpers/pipeDuration';
import './CreateCourse.css';

export default function CreateCourse({
  setCoursesList,
  authorsList,
  setAuthorsList,
  setAddNewCourse
}) {
  const [courseAuthorsList, setCourseAuthorsList] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [duration, setDuration] = useState(0);
  const [authorName, setAuthorName] = useState('');

  function createCourse(e) {
    e.preventDefault();
    if (courseAuthorsList.length === 0 || duration === 0) {
      alert('Please, fill in all fields');
      return;
    }
    const newCourse = {
      id: v4(),
      title,
      description,
      creationDate: new Date().toLocaleDateString(),
      duration,
      authors: courseAuthorsList.map((author) => author.id)
    };
    setCoursesList((prevCourses) => [...prevCourses, newCourse]);
    setAddNewCourse(false);
  }

  function createAuthor(e) {
    e.preventDefault();
    const newAuthor = {
      id: v4(),
      name: authorName
    };
    setAuthorsList((prevAuthorsList) => [...prevAuthorsList, newAuthor]);
    setAuthorName('');
  }

  const addCourseAuthor = (author) => {
    setCourseAuthorsList((prevCoursesAuthorsList) => [
      ...prevCoursesAuthorsList,
      author
    ]);
    setAuthorsList(
      authorsList.filter((authorBase) => author.id !== authorBase.id)
    );
  };

  const removeCourseAuthor = (author) => {
    setAuthorsList((prevAuthorsList) => [...prevAuthorsList, author]);
    setCourseAuthorsList(
      courseAuthorsList.filter((authorBase) => author.id !== authorBase.id)
    );
  };

  return (
    <>
      <form onSubmit={createCourse}>
        <div className="row">
          <Input
            labelText="Title"
            placeholderText="Enter title..."
            value={title}
            name="title"
            minLength="2"
            onChange={(e) => {
              setTitle(e.target.value.trim());
            }}
            required
          />
          <Button
            buttonText="Create course"
            className="create-course-btn"
            type="submit"
          />
        </div>
        <Input
          labelText="Description"
          placeholderText="Enter description"
          labelClassName="create-description-label"
          inputClassName="create-description-input"
          textarea
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />
      </form>
      <div className="details">
        <div className="column">
          <form className="block add-author" onSubmit={createAuthor}>
            <h3 className="creation-title">Add author</h3>
            <Input
              labelText="Author name"
              placeholderText="Enter author name..."
              min="2"
              name="authorName"
              value={authorName}
              onChange={(e) => {
                setAuthorName(e.target.value.trim());
              }}
              required
            />
            <Button
              buttonText="Create author"
              className="create-author-button"
              type="submit"
            />
          </form>
          <div className="block duration">
            <h3 className="creation-title">Duration</h3>
            <Input
              labelText="Duration"
              placeholderText="Enter duration in minutes..."
              type="number"
              value={duration}
              onChange={(e) => {
                setDuration(Number(e.target.value));
              }}
              required
            />
            <span className="duration-result">
              Duration:{' '}
              <span className="time">
                {duration ? pipeDuration(duration) : '00:00'}
              </span>{' '}
              hours
            </span>
          </div>
        </div>
        <div className="column">
          <h3 className="creation-title">Authors</h3>
          <ul className="available-authors-list">
            {authorsList.length === 0 ? (
              <span className="void">Authors list is empty</span>
            ) : (
              authorsList.map((author) => (
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
            {courseAuthorsList.length === 0 ? (
              <span className="void">Author list is empty</span>
            ) : (
              courseAuthorsList.map((author) => (
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
