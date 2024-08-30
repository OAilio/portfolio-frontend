/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";

function AboutMe() {
    const listOfSkills = ["UI Design","HTML", "CSS", "SCSS", "JavaScript", "Python", "Figma", "Java", "Canva",
    "Scrum", "Office Programs", "WordPress", "Git", "React", "SQL"]
    
    return (
      <>
        <div className="about-me-container" id="about">
          <div className="about-me-header">
            <h2>About me</h2>
            <p>Looking for your next key player? Look no further!</p>
          </div>
          <div className="about-me-content">
            <div className="get-to-know">
              <h3>Get to know me!</h3>
              <p>
                I'm a Helsinki-born Interaction Design MSc student at the University of Turku.
                <br></br><br></br>
                I've recently graduated with my bachelor's degree in CS. My tech interests revolve around visual aspects, particularly UI/UX design and frontend development.
                To support this I wrote my bachelor's thesis on dark UI themes, which enhanced my understanding of UI design.
                <br></br><br></br>
                I'm eager to explore diverse job opportunities to kickstart my career! 
                Additionally, I'm open to discussing potential master's thesis topics that could benefit your company!
              </p>
              <div className='button-container'>
                  <Link className="blue-button" to="contact" spy={true} smooth={true} offset={0} duration={700} tabIndex={0}>Contact</Link>
              </div>
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


export default AboutMe