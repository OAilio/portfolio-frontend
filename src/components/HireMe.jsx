/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faLightbulb, faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';

function HireMe() {
  return (
    <div className="hire-me-container" id="hireme">
      <div className="hire-me-header">
        <h2>Traits</h2>
        <p>Here are some of my key traits as an employee and a person</p>
      </div>
      <div className="hire-me-cards">
        <div className="hire-me-card">
          <h3>Learner</h3>
          <FontAwesomeIcon icon={faBookOpenReader} className="card-icon" />
          <p>I'm always looking for ways to learn new things and improve my skills. 
            I'm not afraid to challenge myself. 
          </p>
        </div>
        <div className="hire-me-card">
          <h3>Team Player</h3>
          <FontAwesomeIcon icon={faPeopleCarryBox} className="card-icon" />
          <p>Student organization work and a career in team sports have 
            improved my cooperation and communication skills.
          </p>
        </div>
        <div className="hire-me-card">
          <h3>Proactive</h3>
          <FontAwesomeIcon icon={faLightbulb} className="card-icon" />
          <p>By nature I'm self-motivated and excited to take on new tasks. I finish
            what I start with precision and diligence.
          </p>
        </div>
      </div>
      <div className="button-container">
      <a className='blue-button' href='/cvokkoailio2025portfolio.pdf' target='_blank'>
          Check out my CV
        </a>
      </div>
    </div>
  )
}

export default HireMe