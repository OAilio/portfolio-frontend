/* eslint-disable react/no-unescaped-entities */
import './css/basic.css'
import './css/navbar.css'
import './css/landing.css'
import './css/fonts.css'
import './css/about.css'
import './css/buttons.css'
import './css/hireme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const navbarRight = document.getElementById("navbar-right");
  
    burgerMenu.addEventListener("click", function () {
      navbarRight.style.display = navbarRight.style.display === "none" ? "flex" : "none";
    })
  })

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="#home">JOHN NAME</a>
      </div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact-me">Contact me</a>
      </div>
      <div className="burger-menu" id="burger-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
    </div>
  )
}

const LandingContent = () => {
  return (
    <>
      <div className="landing-content">
        <div className="landing-text">
          <h1>HELLO!</h1>
          <h2>I am John Name</h2>
          <hp>A 3rd year CS student at the University of Turku,
            with an interest for UI/UX-design and web development</hp>
        </div>
        <div className="my-picture">
          <img src='./pictures/okko.jpg' alt='My Picture' />
        </div>
      </div>
      <div className="landing-bottom">
        <h4>Get to know me!</h4>
        <FontAwesomeIcon icon={faAnglesDown} className="down-arrows"/>
      </div>
    </>
  )
}

const AboutMe = () => {
  const listOfSkills = ["HTML", "CSS", "JavaScript", "Python", "Figma", "Java", "Canva",
  "Scrum", "Office Programs", "WordPress", "Git", "React"]
  
  return (
    <>
      <div className="about-me-container">
        <div className="about-me-header">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sodales non dui sed posuere.</p>
        </div>
        <div className="about-me-content">
          <div className="get-to-know">
            <h3>Get to know me!</h3>
            <p>I'm a 23-year-old computer science student at the University of Turku, originally from Helsinki.</p>
            <p>As I'  m getting my bachelor's degree this spring, I am interested in diverse job opportunities, my largest interest being the already mentioned web development and UI/UX-design,
              which I'm currently writing my bachelors thesis on.</p>
            <p>If You're still wondering, whether to hire me, check out the next segment.
              You can also contact me immediately below!</p>
            <button className="blue-button">
              Contact
            </button>
          </div>
          <div className="my-skills">
            <h3>My Skills</h3>
            <div className="skills-list">
              {listOfSkills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const HireMe = () => {
  return (
    <div className="hire-me-container">
      <div className="hire-me-header">
      <h2>Why should You hire me?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sodales non dui sed posuere.</p>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingContent />
      <AboutMe />
      <HireMe />
    </div>
  )
}

export default App