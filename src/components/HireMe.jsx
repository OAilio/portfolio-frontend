import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faLightbulb, faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';

function HireMe() {
  return (
    <div className="hire-me-container" id="hireme">
      <div className="hire-me-header">
        <h2>Why should You hire me?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc sodales non dui sed posuere.</p>
      </div>
      <div className="hire-me-cards">
        <div className="hire-me-card">
          <h3>Learner</h3>
          <FontAwesomeIcon icon={faBookOpenReader} className="card-icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sodales non dui sed posuere.</p>
        </div>
        <div className="hire-me-card">
          <h3>Team Player</h3>
          <FontAwesomeIcon icon={faPeopleCarryBox} className="card-icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sodales non dui sed posuere.</p>
        </div>
        <div className="hire-me-card">
          <h3>Proactive</h3>
          <FontAwesomeIcon icon={faLightbulb} className="card-icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sodales non dui sed posuere.</p>
        </div>
      </div>
      <div className="button-container">
      <a className='blue-button' href='pictures/okko.jpg' target='_blank'>
          Check out my CV
        </a>
      </div>
    </div>
  )
}

export default HireMe