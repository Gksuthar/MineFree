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
            {['Home', 'About Us', 'Our Approach', 'Pricing', 'Portfolio', 'Blog', 'FAQs', 'Get a Quote'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col footer-col-3">
          <h2>Services</h2>
          <ul>
            {[
              'Email Marketing', 'Newsletter Management', 'Web Development',
              'E-Commerce Development', 'SEO Services', 'Social Media Management',
              'Google Ads', 'Branding & Design', 'Website Maintenance'
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-col-4">
          <h2>Legal & Policies</h2>
          <ul>
            {['Privacy Policy', 'Terms & Conditions', 'Refund Policy', 'Cookie Policy', 'Service Agreement'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 5: Contact Info */}
        <div className="footer-col footer-col-5">
          <ul>
            <li>
              <span className="icon">📍</span>
              Address: 5900 Balcones Drive #24285, Austin, TX 78731
            </li>
            <li>
              <span className="icon">📧</span>
              Email: contact@obiztec.com
            </li>
            <li>
              <span className="icon">📞</span>
              Phone: +1 (325) 275-5589
            </li>
            <li>
              <span className="icon">🌐</span>
              Live Chat: Available
            </li>
          </ul>
        </div>

        {/* Column 6: Social Media */}
        <div className="footer-col footer-col-6">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <span className="social-icon">f</span>
            <span className="social-icon">t</span>
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