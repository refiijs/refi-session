import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/stats.css";

const StatsSection = () => {
  return (
    <section className="stats-section py-2 mb-4">
      <div className="stats-container">
        {/* Item 1: UI/UX Portfolio */}
        <div className="stat-item">
          <h2 className="stat-number">
            9<span>+</span>
          </h2>
          <p className="stat-text">UI/UX Portfolio</p>
        </div>

        <div className="stat-item">
          <h2 className="stat-number">
            4<span>+</span>
          </h2>
          <p className="stat-text">Website Portfolio</p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">
            3<span>+</span>
          </h2>
          <p className="stat-text">Licences & Certifications</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
