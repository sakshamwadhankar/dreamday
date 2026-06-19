import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-about">
                <div className="footer-logo">
                    <h2>Dream Day</h2>
                    <span>Events</span>
                </div>
                <p>Creating magical memories with premium aesthetics, gourmet catering, and signature setups led by creative visionary Ayush Kale.</p>
                <div className="manager-socials">
                    <a href="https://www.instagram.com/royal_eventanddecor?igsh=MXQ5bDI0NzBkbmhoaQ==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://wa.me/918459398321?text=Hi%20Dream%20Day%20Events%2C%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
            
            <div className="footer-col">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Our Services</Link></li>
                    <li><Link to="/gallery">Recent Gallery</Link></li>
                    <li><Link to="/portfolio">Bespoke Portfolio</Link></li>
                    <li><Link to="/videos">Event Glimpses</Link></li>
                    <li><Link to="/packages">Pricing Packages</Link></li>
                </ul>
            </div>
            
            <div className="footer-col">
                <h3>Services</h3>
                <ul className="footer-links">
                    <li><Link to="/services">Luxury Weddings</Link></li>
                    <li><Link to="/services">Haldi Ceremony setups</Link></li>
                    <li><Link to="/services">Reception Decor</Link></li>
                    <li><Link to="/services">Bespoke Catering</Link></li>
                    <li><Link to="/services">Corporate Galas</Link></li>
                </ul>
            </div>
            
            <div className="footer-col footer-contact-info">
                <h3>Contact Info</h3>
                <p><i className="fa-solid fa-phone"></i> +91 84593 98321</p>
                <p><i className="fa-solid fa-envelope"></i> Ayushkale0412@gmail.com</p>
                <p><i className="fa-solid fa-location-dot"></i> Pune, Maharashtra</p>
                <p><i className="fa-solid fa-clock"></i> Mon - Sun: 09:00 AM - 09:00 PM</p>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>&copy; 2026 Dream Day Events. All Rights Reserved. Managed by Mr. Ayush Kale.</p>
        </div>
    </footer>
  );
};

export default Footer;
