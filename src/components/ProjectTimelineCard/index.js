import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-time-line-card-container">
      <img src={imageUrl} alt="project" className="img-project" />
      <div className="title-duration-container">
        <h1 className="title-heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#1e293b" className="fill-calendar" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <div className="description-container">
        <p className="desc">{description}</p>
      </div>
      <a href={projectUrl} className="hyperlink">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
