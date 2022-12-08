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
  const [course, setCourses] = useState();

  useEffect(() => {
    [...courses].map((courseObj) => {
      if (courseObj.id === courseId) {
        setCourses(courseObj);
      }
      console.log(courseObj.authors.at(-1))
    });
  }, []);


  return (
    <>
      {!course ? (
        <Preloader />
      ) : (
        <>
          <Link to="/courses">⇦ Back to courses</Link>
          <h1 className="course-title">{course.title}</h1>
          <div className="information">
            <div className="detail-description">{course.description}</div>
            <ul className="detail-information">
              <li>
                <span className="course-info">ID: </span>
                {course.id}
              </li>
              <li>
                <span className="course-info">Duration: </span>
                {pipeDuration(course.duration) + " hours"}
              </li>
              <li>
                <span className="course-info">Created: </span>
                {dateGenerator(course.creationDate)}
              </li>
              <li>
                <span className="course-info">Authors: </span>
                {authors.map((author) => {
                  if (course.authors.includes(author.id)) {
                    return " " + author.name + ",";
                  }
                })}
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
