import './css/basic.css'
import './css/navbar.css'
import './css/landing.css'
import './css/fonts.css'
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
          <p>A 3rd year CS student at the University of Turku, with an interest for UI/UX-design and web development</p>
        </div>
        <div className="my-picture">
          <img src='./pictures/okko.jpg' alt='My Picture' />
        </div>
      </div>
      <div className="landing-bottom">
        <h3>Get to know me!</h3>
        <FontAwesomeIcon icon={faAnglesDown} fade className="down-arrows"/>
      </div>
    </>
  )
}

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingContent />
    </div>
  )
}

export default App