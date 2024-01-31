/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";

function AboutMe() {
    const listOfSkills = ["HTML", "CSS", "JavaScript", "Python", "Figma", "Java", "Canva",
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
              <p>I'm a 23-year-old computer science student at the University of Turku, originally from Helsinki.</p>
              <p>Currently I'm writing my bachelors thesis on UI design, focusing on the visual elements.
                This supports my interest in the field of digital design and web development.<br/><br/> I'm looking for diverse
                job opportunities, as I'm graduating with a bachelors degree this spring, and will continue my
                academic journey as a masters student in interaction design next fall. 
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