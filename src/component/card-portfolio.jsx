import React from "react";
import "../styles/card-portfolio.css";
import { Link } from "react-router-dom";
import portfolioUIUXItems from "../component/uiux-items";
import portfolioWebItems from "../component/web-items";
import portfolioIllusItems from "../component/illus-items";

const PortfolioCard = ({ category }) => {
  let filteredItems = [];

  // Menentukan data berdasarkan kategori yang dipilih
  if (category === "UIUX") {
    filteredItems = portfolioUIUXItems;
  } else if (category === "Web") {
    filteredItems = portfolioWebItems;
  } else if (category === "Illustration") {
    filteredItems = portfolioIllusItems;
  }

  return (
    <div className="portfolio-section container mt-3">
      <div className="row">
        {filteredItems.map((item, index) => (
          <div key={index} className="col-md-3 text-start">
            {/* Jika kategori Illustration, tidak menggunakan <Link> */}
            {category === "Illustration" ? (
              <div className="portfolio-card disabled-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100 h-auto rounded"
                />
                <h5 className="mt-3 ms-3 me-3">{item.title}</h5>
                <p className="mt-2 ms-3 me-3 text-muted">{item.description}</p>
              </div>
            ) : (
              <Link
                to={`/portfolio/${encodeURIComponent(item.title)}`}
                className="text-decoration-none"
              >
                <div className="portfolio-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-auto rounded"
                  />
                  <h5 className="mt-3 ms-3 me-3">{item.title}</h5>
                  <p className="mt-2 ms-3 me-3 text-muted">
                    {item.description}
                  </p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
