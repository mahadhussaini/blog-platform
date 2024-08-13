import React from "react";
import "../../styles/layout/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Bloggify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
