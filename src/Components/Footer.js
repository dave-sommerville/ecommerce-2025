import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../Style/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-columns container">
        <div className="footer-column">
          <h4 className="no-select">Customer Support</h4>
          <ul>
            <li><a href="">Help Center</a></li>
            <li><a href="">Shipping & Delivery</a></li>
            <li><a href="">Returns & Exchanges</a></li>
            <li><a href="">Returns & Exchanges</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="no-select">Company Information</h4>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Press & Media</a></li>
            <li><a href="">Store Locator</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="no-select">Policies & Extras</h4>
          <ul>
            <li><a href="">Privacy policy</a></li>
            <li><a href="">Terms & Coniditons</a></li>
            <li><a href="">Cookie Settings</a></li>
            <li><a href="">Gift Cards</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom no-select container">
        <a href="https://ds-code.ca" target="_blank" rel="noopener noreferrer"><p>Dave Sommerville © 2025 DS Code</p></a>
        <div className="social-icons">
          <a href="mailto:dave.r.sommerville@outlook.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/dave-sommerville" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/dave-sommerville-2abb50326" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@davesommerville-ds-code" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;