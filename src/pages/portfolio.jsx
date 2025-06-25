import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import PortfolioGrid from "../component/card-portfolio";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "UIUX"
  );
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <section className="portfolio-section py-3 text-center">
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <h3 className="text-warning fw-semibold mt-4">Projects</h3>
          <h2 className="display-5 fw-bold text-dark mt-2">
            Explore My Portfolio
          </h2>

          <p className="text-muted mt-3 mb-3">
            Want to collaborate or work with me? Get in touch by clicking the
            button below.
          </p>

          <div className="d-flex justify-content-center mt-3">
            <div className="btn-group" role="group">
              <button
                className={`btn btn-light ${
                  activeTab === "UIUX" ? "active" : ""
                }`}
                onClick={() => setActiveTab("UIUX")}
              >
                UI/UX Design
              </button>
              <button
                className={`btn btn-light ${
                  activeTab === "Web" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Web")}
              >
                Website
              </button>
              <button
                className={`btn btn-light ${
                  activeTab === "Illustration" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Illustration")}
              >
                Illustration
              </button>
            </div>
          </div>

          {/* Button View More hanya muncul jika kategori Illustration aktif */}
        </div>
      </div>
      <PortfolioGrid category={activeTab} />

      {activeTab === "UIUX" && (
        <div className="mt-2 mb-5">
          <a
            href="https://drive.google.com/file/d/1c5l56weM5xk8HqYWxXzR9StVge5Fm1Bc/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom fw-semibold"
          >
            View More UI/UX Design
          </a>
        </div>
      )}

      {activeTab === "Illustration" && (
        <div className="mt-2 mb-5">
          <a
            href="https://drive.google.com/file/d/177nEdrTNdlwtGK4WzHWSahkW-EetNkGe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom fw-semibold"
          >
            View More Illustrations
          </a>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
