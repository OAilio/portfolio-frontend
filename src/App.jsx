// eslint-disable-next-line no-unused-vars
import './css/basic.css'
import './css/navbar.css'
import './css/landing.css'
import './css/fonts.css'
import './css/about.css'
import './css/buttons.css'
import './css/hireme.css'
import './css/projects.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import LandingContent from './components/LandingContent'
import AboutMe from './components/AboutMe'
import HireMe from './components/HireMe'


const ContactMe = () => {
  return (
    <div className="hire-me-header" id="contact">
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc sodales non dui sed posuere.</p>
      </div>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <LandingContent />
      <AboutMe />
      <HireMe />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App