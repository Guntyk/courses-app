import { dateGenerator } from "../../../helpers/dateGenerator";
import { useCoursesContext } from "../../../context/Courses";
import { pipeDuration } from "../../../helpers/pipeDuration";
import Preloader from "../../../common/Preloader/Preloader";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./CourseInfo.css";

export default function CourseInfo() {
  const { courses, authors } = useCoursesContext();
  const { courseId } = useParams();
  const [course, setCourse] = useState();

  useEffect(() => {
    [...courses].map((courseObj) => {
      if (courseObj.id === courseId) {
        setCourse(courseObj);
      }
    });
  }, []);

  function findAuthors(courseAuthorId) {
    // const result = ;
    // if (result !== undefined) {
    //   return result.name;
    // }
  }

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
