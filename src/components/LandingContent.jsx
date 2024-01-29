import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const LandingContent = () => {
    return (
      <div className="landing-container" id="landing">
        <div className="landing-content">
          <div className="landing-text">
            <h1>HELLO!</h1>
            <h2>I am Okko Ailio</h2>
            <h5>A 3rd year CS student at the University of Turku,
              with an interest for UI/UX-design and web development</h5>
          </div>
          <div className="my-picture">
            <img src='dist\pictures\okko.jpg' alt='My Picture' />
          </div>
        </div>
        <div className="landing-bottom">
          <h4>Get to know me!</h4>
          <FontAwesomeIcon icon={faAnglesDown} fade className="down-arrows"/>
        </div>
      </div>
    )
  }


  export default LandingContent