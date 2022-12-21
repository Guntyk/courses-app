import { authorsSelector } from "../../../../redux/authors/selectors";
import { dateGenerator } from "../../../../helpers/dateGenerator";
import { pipeDuration } from "../../../../helpers/pipeDuration";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../common/Button/Button";
import { useHistory } from "react-router-dom";
import "./CourseCard.css";
import { deleteCourse } from "../../../../redux/courses/thunk";

export default function CourseCard({ course }) {
  const authors = useSelector(authorsSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <section className="course-card">
        <div className="course-about">
          <h2 className="title">{course.title}</h2>
          <p className="description course-description">{course.description}</p>
        </div>
        <div className="course-details">
          <ul className="course-info-list">
            <li>
              <span className="course-info">Authors:</span>
              <p className="course-authors">
                {course.authors
                  .map(
                    (courseAuthorId) =>
                      authors.find((author) => author.id === courseAuthorId)
                        ?.name
                  )
                  .join(", ")}
              </p>
            </li>
            <li>
              <span className="course-info">Duration:</span>
              {pipeDuration(course.duration) + " hours"}
            </li>
            <li>
              <span className="course-info">Created:</span>
              {dateGenerator(course.creationDate)}
            </li>
          </ul>
          <div className="course-card-btns">
            <Button
              className="btn-secondary show-course-btn"
              buttonText="Show course"
              onClick={() => {
                history.push(`/courses/${course.id}`);
              }}
            />
            <Button className="btn-secondary small-btn" editBtn />
            <Button
              className="btn-secondary small-btn"
              deleteBtn
              onClick={() => {
                dispatch(deleteCourse(course.id));
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
