/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';


function ContactMe() {
  return (
    <div className="contact-container"  id="contact">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>Click the icons to contact me on different platforms!</p>
      </div>
      <div className="contact-item">
        <a className="contact-icon" href='mailto:oiaili@utu.fi'>
            <FontAwesomeIcon icon={faEnvelope}/>
        </a>
        <h5>E-mail: oiaili[at]utu.fi</h5>
      </div>
      <div className="contact-item">
        <a className="contact-icon-linkedin" href='https://www.linkedin.com/in/okkoailio/' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <h5>www.linkedin.com/in/okkoailio</h5>
      </div>
      <div className="contact-item">
        <a className="contact-icon" href='https://t.me/okkoailio' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram}/>
        </a>
        <h5>Telegram: @ okkoailio</h5>
      </div>
      <div className='contact-bottom'>
        <p>Please don't hesitate to ask for my phone number through the given options.</p>
      </div>
    </div>
  )
}

export default ContactMe