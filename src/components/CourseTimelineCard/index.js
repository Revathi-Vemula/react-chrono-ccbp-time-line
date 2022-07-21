import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card-container">
      <div className="course-card-heading-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="clock-duration-container">
          <AiFillClockCircle color="#1e293b" className="clock-fill" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <div className="desc-container">
        <p>{description}</p>
      </div>
      <ul className="tags-list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="tag-item">
            <p className="name">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
