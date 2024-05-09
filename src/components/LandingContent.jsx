/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const LandingContent = () => {
    return (
      <div className="landing-container" id="landing">
        <div className="landing-content">
          <div className="landing-text">
            <h1>HELLO!</h1>
            <h2>I am Okko Ailio</h2>
            <h5>A IxD master's student at the University of Turku,
              on the journey of becoming a professional in digital design and development</h5>
          </div>
          <div className="my-picture">
            <img src='./okko.jpg' alt='My Picture' />
          </div>
        </div>
        <div className="landing-bottom">
          <h4>Get to know me!</h4>
          <Link to="about" spy={true} smooth={true} offset={0} duration={700} tabIndex={0}>
            <FontAwesomeIcon icon={faAnglesDown} fade className="down-arrows"/></Link>
        </div>
      </div>
    )
  }


  export default LandingContent