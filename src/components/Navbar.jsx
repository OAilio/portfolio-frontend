import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {

  const scrollToTop = () => {
    scroll.scrollToTop()
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <>
      <nav>
        <div className="navbar-logo">
          <Link onClick={() => { scrollToTop(); closeMenu(); }} to="" spy={true} smooth={true} duration={700} tabIndex={0}>OKKO AILIO</Link>
        </div>
        <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={() => {
          setIsOpen(!isOpen);
          console.log("click!");
          console.log("Current state:", isOpen);
        }}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        <ul className={isOpen ? "open" : ""}>
          <li>
            <Link onClick={() => { scrollToTop(); closeMenu(); }} to="" spy={true} smooth={true} duration={700} tabIndex={0}>Home</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="about" spy={true} smooth={true} offset={0} duration={700} tabIndex={0}>About</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="hireme" spy={true} smooth={true} offset={0} duration={700} tabIndex={0}>Hire me!</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="projects" spy={true} smooth={true} offset={0} duration={700} tabIndex={0}>Projects</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="contact" spy={true} smooth={true} offset={0} duration={700} tabIndex={0}>Contact me</Link>
          </li> 
        </ul>
      </nav>
    </>
  )
}

// function Dropdown() {

//   return (
//       <ul className={`navbar-list ${isOpen ? "is-open" : ""}`}>
//           <h1>Moi</h1>            
//       </ul>

//   )
// }


export default Navbar;

