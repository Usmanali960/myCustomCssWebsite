import React from 'react';
import styles from "@/app/page.module.css"// Import the CSS module
import 'boxicons/css/boxicons.min.css';  

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* University Information */}
        <div className={styles.universityInfo}>
          <div className={styles.universityInfoHeader}>
            <i className="bx bxs-graduation mr-2"></i> Eduford
          </div>
          <p>
            Eduford is one of the world’s leading universities in technology and sciences,
            dedicated to providing quality education and fostering innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#course">Courses</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info and Social Media */}
        <div className={styles.contactInfo}>
          <h2>Contact Us</h2>
          <p>123 University Ave, Education City, Pakistan</p>
          <p>Email: info@eduford.edu.pk</p>
          <p>Phone: +92 123 456789</p>

          {/* Social Media Icons */}
          <div className={styles.socialMedia}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} Eduford University. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
