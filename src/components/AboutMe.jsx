/* eslint-disable react/no-unescaped-entities */

function AboutMe() {
    const listOfSkills = ["HTML", "CSS", "JavaScript", "Python", "Figma", "Java", "Canva",
    "Scrum", "Office Programs", "WordPress", "Git", "React", "SQL"]
    
    return (
      <>
        <div className="about-me-container" id="about">
          <div className="about-me-header">
            <h3>About me</h3>
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
              <div className='button-container'>
                <a className="blue-button">
                  Contact
                </a>
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