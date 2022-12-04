import Button from '../../../../common/Button/Button';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { dateGenerator } from '../../../../helpers/dateGenerator';
import { mockedAuthorsList } from '../../../../constants';
import './CourseCard.css';

export default function CourseCard({ course, authorsList }) {
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
              {authorsList.map(author => course.authors.includes(author.id) ? ' ' + author.name : '')}
            </li>
            <li>
              <span className="course-info">Duration: </span>
              {pipeDuration(course.duration) + ' hours'}
            </li>
            <li>
              <span className="course-info">Created: </span>
              {dateGenerator(course.creationDate)}
            </li>
          </ul>
          <Button buttonText="Show course" />
        </div>
      </section>
    </>
  );
}
