import { dateGenerator } from "../../../../helpers/dateGenerator";
import { pipeDuration } from "../../../../helpers/pipeDuration";
import { useCoursesContext } from "../../../../context/Courses";
import Button from "../../../../common/Button/Button";
import { useHistory } from "react-router-dom";
import "./CourseCard.css";

export default function CourseCard({ course }) {
  const { authors } = useCoursesContext();
  const history = useHistory();
  let string = "";
  
  const authorsArr = authors.map((author) =>
    course.authors.includes(author.id) ? " " + author.name : ""
  );

  authorsArr.map((author) => {
    string += author;
  });

  let sliced = string.slice(0, 30);
  if (sliced.length < string.length) {
    sliced += "...";
  }

  return (
    <>
      <section className="course-card">
        <div className="course-about">
          <h2 className="title">{course.title}</h2>
          <p className="description">{course.description}</p>
        </div>
        <div className="course-details">
          <ul className="course-info-list">
            <li>
              <span className="course-info">Authors:</span>
              {sliced}
            </li>
            <li>
              <span className="course-info">Duration: </span>
              {pipeDuration(course.duration) + " hours"}
            </li>
            <li>
              <span className="course-info">Created: </span>
              {dateGenerator(course.creationDate)}
            </li>
          </ul>
          <Button
            buttonText="Show course"
            onClick={() => {
              history.push("/courses/" + course.id);
            }}
          />
        </div>
      </section>
    </>
  );
}
