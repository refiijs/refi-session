import React from "react";
import "../styles/about.css";
import aboutImg from "../assets/about.png";

const AboutMe = () => {
  return (
    <div className="about-container mt-5">
      <h3 className="text-warning text-center fw-semibold mt-4">About Me</h3>
      <h2 className="text-center display-5 fw-bold text-dark mt-2">
        Get to Know Me
      </h2>

      <div className="about-content row mt-4 align-items-center">
        {/* Foto Profil */}
        <div className="col-md-4 text-center">
          <img
            src={aboutImg} // Ganti dengan link foto asli
            alt="Refi Junitasari"
            className="about-img"
          />
        </div>

        {/* Informasi Summary */}
        <div className="col-md-8 ">
          <h5 className="about-section-title ms-4">Summary</h5>
          <p className="about-text ms-4">
            <strong>Hi, I'm Refi Junitasari</strong>
            <br />I am a fresh graduate in Informatics Engineering from Telkom
            University Purwokerto with a strong interest in design, software
            development, and data processing.
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="about-section mt-4">
        <h5 className="about-section-title">Education</h5>
        <p className="about-item">
          Telkom University - Kampus Purwokerto
          <span className="about-date">2021 - 2025</span>
        </p>
        <p className="about-text">Fresh Graduate of Informatics Engineering</p>
        <p className="about-text">GPA: 3.97/4.00</p>
      </div>

      {/* Organizational Experience */}
      <div className="about-section mt-4">
        <h5 className="about-section-title">Organizational Experience</h5>
        <p className="about-item">
          Google Developer Student Clubs
          <span className="about-date">2023 - 2024</span>
        </p>
        <p className="about-text">
          Core Team Curriculum and Developer as UI/UX Specialist
        </p>

        <p className="about-item">
          Badan Eksekutif Mahasiswa Fakultas Informatika
          <span className="about-date">2022 - 2023</span>
        </p>
        <p className="about-text">Staff of Media Information Department</p>
      </div>

      {/* Experience */}
      <div className="about-section mt-4">
        <h5 className="about-section-title">Experience</h5>
        <p className="about-item">
          Front-End Web And Back-End : Dicoding Cycle 5
          <span className="about-date">2023 - 2024</span>
        </p>
        <p className="about-text">
          Internship and Certified Independent Study (MSIB) Program organized by
          the Ministry of Education, Culture, Research and Technology
        </p>

        <p className="about-item">
          Project-Based Virtual Intern
          <span className="about-date">2023 August</span>
        </p>
        <p className="about-text">
          UX Researcher Telkom Digital Amoeba x Rakamin Academy
        </p>
      </div>
      <div className="bout-section mt-4">
        <h5 className="about-section-title">Honors & Awards</h5>

        <div className="about-section mt-4">
          <p className="about-item">
            Front-End Web And Back-End : Dicoding Cycle 5
            <span className="about-date">2024</span>
          </p>
          <p className="about-text">
            Won the best Capstone award out of 120 teams by creating the "Green
            Haven" application that aims to educate people about the importance
            of green spaces and how to maximize the use of narrow land in
            residential areas.
          </p>
        </div>

        <div className="about-section mt-4">
          <p className="about-item">
            Collaboration to Create AI-Based Digital Innovation
            <span className="about-date">2023</span>
          </p>
          <p className="about-text">
            Our team was entrusted by the Bogor City Tourism and Culture Office
            (Disparbud) to develop an interactive chatbot that presents
            comprehensive information about Bogor City.
          </p>
        </div>

        <div className="about-section mt-4">
          <p className="about-item">
            Universitas Bina Nusantara
            <span className="about-date">2023</span>
          </p>
          <p className="about-text">
            Ranked in the top 10 out of 119 teams in 9 countries. We developed
            prototype designs for mobile and web applications customized to the
            Hospitality Industry theme for BINUS Square. The design prioritized
            efficiency and significantly improved the guest experience.
          </p>
        </div>

        <div className="about-section mt-4">
          <p className="about-item">
            Universitas Brawijaya
            <span className="about-date">2022</span>
          </p>
          <p className="about-text">
            Designed a mobile app called "BeeTan Verse" to educate children
            about farming and "Learning Peace Disability" to help students with
            disabilities evaluate their subjects.
          </p>
        </div>

        <div className="about-section mt-4">
          <p className="about-item">
            Universitas Dinamika
            <span className="about-date">2022</span>
          </p>
          <p className="about-text mb-5">
            Ranked in the top 6. We created a prototype design for the "Litech"
            application which is engaged in education to increase interest in
            literacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
