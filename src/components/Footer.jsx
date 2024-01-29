import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-text">
                <h6>Okko Ailio | oiaili[at]utu.fi</h6>
            </div>
            <div className="footer-icons">
                <a className="footer-icon" href='mailto:oiaili@utu.fi'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
                <a className="footer-icon" href='https://www.linkedin.com/in/okkoailio/' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a className="footer-icon" href='https://t.me/okkoailio' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faTelegram}/>
                </a>
                <a className="footer-icon" href='mailto:oiaili@utu.fi'>
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    )
}

export default Footer