// eslint-disable-next-line no-unused-vars
import './css/fonts_basics.css'
import './css/navbar.css'
import './css/landing.css'
import './css/fonts.css'
import './css/about.css'
import './css/buttons.css'
import './css/hireme.css'
import './css/projects.css'
import './css/contact.css'
import './css/footer.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import LandingContent from './components/LandingContent'
import AboutMe from './components/AboutMe'
import HireMe from './components/HireMe'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <LandingContent />
      <AboutMe />
      <HireMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App