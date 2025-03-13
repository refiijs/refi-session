import React from "react";
import "../styles/certification.css";

const certifications = [
  {
    date: "December 2024",
    title: "Junior Web Developer",
    issuer: "BNSP - Badan Nasional Sertifikasi Profesi",
    file: "https://drive.google.com/file/d/1CfduMt7pH1KEg9wehDijhdjlk0fYyH9U/view?usp=sharing",
  },
  {
    date: "November 2023",
    title: "Front-End Web Developer Expert",
    issuer: "Dicoding Academy",
    file: "https://drive.google.com/file/d/1nYsYmZPorsSVZHH3jmQ9raFi3sZc_Vzt/view?usp=drive_link",
  },
  {
    date: "September 2023",
    title: "Fundamental Front-End Web Development",
    issuer: "Dicoding Academy",
    file: "https://drive.google.com/file/d/1XzjtFryKeVodrNGYGeZAXX2_vJTIhhc5/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section py-5 text-center">
      <div className="container">
        <div className="col-lg-10 mx-auto">
          <h2 className="display-5 fw-bold text-dark mt-2">
            Licenses and Cerifications
          </h2>

          <p className="text-muted mt-3 mb-5">
            A collection of my professional licenses and certifications
          </p>

          <div className="timeline">
            {certifications.map((cert, index) => (
              <div key={index} className="timeline-item">
                <span className="date me-4">{cert.date}</span>
                <div className="content d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="fw-semibold">{cert.title}</h5>
                    <p className="text-muted">{cert.issuer}</p>
                  </div>
                  <a
                    href={cert.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-custom btn-sm"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
