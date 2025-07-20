/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";

function AboutMe() {
    const listOfSkills = ["UI/UX Design", "User Communication", "CSS", "SASS", "Tailwind", "React", "JavaScript", "TypeScript", "Canva",
    "Scrum", "Office Programs", "WordPress", "Python", "Java", "Git",  "SQL"]
    
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
                I've recently kickstarted my career in data visualisation as a designer-developer. Early in my studies I developed an interest towards the
                visual aspects of tech, particularly UI/UX & frontend development.
                <br></br><br></br>
                I'm eager to explore diverse opportunities to utilize my skills in creating cool s***. 
                As I'm heading into my final year of studies, I'm open to discussing potential master's thesis topics that could benefit your company!
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