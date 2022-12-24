import { coursesSelector } from "../../../redux/courses/selectors";
import { authorsSelector } from "../../../redux/authors/selectors";
import { dateGenerator } from "../../../helpers/dateGenerator";
import { pipeDuration } from "../../../helpers/pipeDuration";
import Preloader from "../../../common/Preloader/Preloader";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import "./CourseInfo.css";

export default function CourseInfo() {
  const courses = useSelector(coursesSelector);
  const authors = useSelector(authorsSelector);
  const [course, setCourse] = useState();
  const { courseId } = useParams();

  useEffect(() => {
    [...courses].map((courseObj) => {
      if (courseObj.id === courseId) {
        setCourse(courseObj);
      }
    });
  }, []);

  return (
    <>
      {!course ? (
        <Preloader />
      ) : (
        <>
          <Link className="back-link" to="/courses">
            ˂ Back to courses
          </Link>
          <div className="course-all-info">
            <div className="course-title-wrapper">
              <h1 className="course-title">{course.title}</h1>
            </div>
            <div className="information">
              <div className="detail-description">
                <ul className="detail-information">
                  <li>
                    <span className="course-info">ID:</span>
                    {course.id}
                  </li>
                  <li>
                    <span className="course-info">Duration:</span>
                    {pipeDuration(course.duration) + " hours"}
                  </li>
                  <li>
                    <span className="course-info">Created:</span>
                    {dateGenerator(course.creationDate)}
                  </li>
                  <li>
                    <span className="course-info">Authors:</span>
                    {course.authors
                      .map(
                        (courseAuthorId) =>
                          authors.find((author) => author.id === courseAuthorId)
                            ?.name
                      )
                      .join(", ")}
                  </li>
                </ul>
                {course.description}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
