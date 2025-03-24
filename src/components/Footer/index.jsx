import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Column 1: Company Info */}
        <div className="footer-col footer-col-1">
          <div className="logo">Obiztec</div>
          <h3>Empowering Businesses with Affordable Custom Tech Solutions</h3>
          <h4>Supported Tech Stacks</h4>
          <p>Flutter, .NET, Node.js, React, Next.js, Vue.js, JavaScript, PHP Laravel and more.</p>
          <p>Contact us about other tech stacks not mentioned.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col footer-col-2">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Approach</li>
            <li>Pricing</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Get a Quote</li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col footer-col-3">
          <h2>Services</h2>
          <ul>
            <li>Email Marketing</li>
            <li>Newsletter Management</li>
            <li>Web Development</li>
            <li>E-Commerce Development</li>
            <li>SEO Services</li>
            <li>Social Media Management</li>
            <li>Google Ads</li>
            <li>Branding & Design</li>
            <li>Website Maintenance</li>
          </ul>
        </div>

        {/* Column 4: Legal & Policies */}
        <div className="footer-col footer-col-4">
          <h2>Legal & Policies</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Cookie Policy</li>
            <li>Service Agreement</li>
          </ul>
        </div>

        {/* Column 5: Contact Info */}
        <div className="footer-col footer-col-5">
          <ul>
            <li>
              <span className="icon">📍</span> Address: 5900 Balcones Drive #24285, Austin, TX 78731
            </li>
            <li>
              <span className="icon">📧</span> Email: contact@obiztec.com
            </li>
            <li>
              <span className="icon">📞</span> Phone: +1 (325) 275-5589
            </li>
            <li>
              <span className="icon">🌐</span> Live Chat: Available
            </li>
          </ul>
        </div>

        {/* Column 6: Social Media */}
        <div className="footer-col footer-col-6">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <span className="social-icon">f</span>
            <span className="social-icon">o</span>
            <span className="social-icon">in</span>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="divider"></div>

      {/* Copyright */}
      <div className="copyright">
        © 2025 Obiztec. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;