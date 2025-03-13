import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import hero from "../assets/hero.png";
import StatsSection from "../component/stats";
import Portfolio from "../component/new-project";
import Footer from "../component/footer";

const Home = () => {
  return (
    <>
      <section className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-4">
        {/* Left Content */}
        <div className="text-center text-md-start">
          <h1 className="fw-bold display-4 text-dark">
            <span className="text-primary">Wel</span>
            <span className="outline-text">come.</span>
          </h1>
          <h2 className="fs-4 fw-semibold text-dark">to My Portfolio</h2>
          <p className="text-muted mt-3">
            Welcome to a journey through my creative process, where every
            project is a solution, and every experience tells a story. Each
            creation reflects a commitment to user-centric solutions, blending
            aesthetic appeal with functionality and innovation.
          </p>
          <a
            href="#projects"
            className="btn btn-custom btn-lg mt-5"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Find My Projects
          </a>
        </div>

        {/* Right Image Section */}
        <div className="mt-4 mt-md-0">
          <img src={hero} alt="UI/UX Design Portfolio" width="500" />
        </div>
      </section>
      <StatsSection />

      <section className="about-me-section py-5 text-center bg-light">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <h3 className="text-warning fw-semibold mt-4">About Me</h3>
            <h2 className="display-5 fw-bold text-dark mt-2">
              Uncover My Background
            </h2>
            <p className="text-muted mt-5">
              My name is <strong>Refi Junitasari</strong>, a recent Engineering
              graduate with a strong passion for UI/UX design and web
              development. Combining my skills in design and development, I
              strive to create digital solutions that are not only functional
              but also visually appealing and user-friendly, ensuring a seamless
              and engaging user experience.
            </p>
            <p className="text-muted mt-3">
              I am a motivated and detail-oriented individual who is always
              eager to learn and take on new challenges. If you're looking for a
              dedicated professional with a strong work ethic and a passion for
              UI/UX design or web development, feel free to connect with me.
            </p>
            <a
              href="/path-to-your-cv.pdf"
              className="btn btn-custom btn-lg mt-5 mb-4 me-4"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
            <a
              href="https://drive.google.com/drive/folders/1GNncoNv3gQWyVhLVHuYNHmjeL0yU_2Ot?usp=sharing"
              className="btn btn-outline btn-lg mt-5 mb-4"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Portfolio
            </a>
          </div>
        </div>
      </section>

      <Portfolio />

      <section className="contact-me-section py-5 text-center bg-light">
        <div className="container">
          <div className="col-lg-8 mx-auto">
            <h3 className="text-warning fw-semibold mt-4">Contact Me</h3>
            <h2 className="display-5 fw-bold text-dark mt-2">Get in Touch</h2>

            <p className="text-muted mt-3 mb-5">
              Want to collaborate or working with me? Get in touch by clicking
              button below.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6 mb-3">
                <a
                  href="mailto:refijunita3@gmail.com"
                  className="text-decoration-none"
                >
                  <div className="card shadow-sm border-0 p-6">
                    <div className="card-contact text-center">
                      <i className="bi bi-envelope-fill text-primary fs-2"></i>
                      <h5 className="fw-bold mt-2">Email</h5>
                      <p className="text-contact small">
                        refijunita3@gmail.com
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="col-md-4 col-sm-6 mb-3">
                <a
                  href="https://www.linkedin.com/in/refiijs17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="card shadow-sm border-0 p-6">
                    <div className="card-contact text-center">
                      <i className="bi bi-linkedin text-primary fs-2"></i>
                      <h5 className="fw-bold mt-2">LinkedIn</h5>
                      <p className="text-contact small">Refi Junitasari</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* WhatsApp */}
              <div className="col-md-4 col-sm-6 mb-3">
                <a
                  href="https://wa.me/6285714171826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="card shadow-sm border-0 p-6">
                    <div className="card-contact text-center">
                      <i className="bi bi-whatsapp text-success fs-2"></i>
                      <h5 className="fw-bold mt-2">WhatsApp</h5>
                      <p className="text-contact small">085714171826</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
