import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#223776" }} className="text-light py-2">
      <div className="container text-center">
        <p className="mb-0 fs-6">
          © {new Date().getFullYear()} ReffiSession. All Rights Reserved.
        </p>
        <div className="social-icons mb-2">
          <a
            href="mailto:refijuni3@gmail.com"
            className="me-3 text-light fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/refiijs17"
            className="me-3 text-light fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/refiijs"
            className="text-light fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
