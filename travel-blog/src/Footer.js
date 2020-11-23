import React from "react";

let currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer className="footer-section bg-primary center">
        <p className="footer-link"> &copy; {currentYear} Travelize</p>
        <div className="ml-auto links">
          <a className="footer-link">Privacy Policy</a>
          <a className="footer-link">Terms and Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
