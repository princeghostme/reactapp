import './Footer.css';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   <>
    <footer className="footer app-theme-bg-reverse text-light py-5 text-csPrimary">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h3 className="fw-bold text-uppercase">Bite And Diet</h3>
            <p>
              Bite And Diet offers personalized diet programs designed to help
              you achieve your health and wellness goals. Start your journey
              today!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h3 className="fw-bold text-uppercase">Quick Links</h3>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-csPrimary footer-link">Home</Link></li>
              <li><Link to="/about" className="text-csPrimary footer-link">About Us</Link></li>
              <li><Link to="/services" className="text-csPrimary footer-link">Our Services</Link></li>
              <li><Link to="/blogs" className="text-csPrimary footer-link">Blogs</Link></li>
              <li><Link to="/contact" className="text-csPrimary footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-md-4">
            <h3 className="fw-bold text-uppercase">Contact Us</h3>
            <p><strong>Email:</strong> support@biteanddiet.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Location:</strong> 123 Healthy Street, Wellness City</p>

            {/* Social Media Links */}
            <div className="social-icons mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Bite And Diet. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
   </>
  );
};

export default Footer;
