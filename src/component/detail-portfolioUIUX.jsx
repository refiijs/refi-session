import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detail-portfolio.css";
import portfolioUIUXItems from "../component/uiux-items";

const PortfolioPreview = ({ portfolio }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div className="mt-4 text-start">
      <h3 className="h5 fw-bold mb-4">{portfolio.title} Preview</h3>
      <div
        className="preview-container overflow-auto d-flex mb-5"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: "grab", whiteSpace: "nowrap" }}
      >
        {portfolio.previewImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Project Preview ${index + 1}`}
            className="rounded border shadow-sm me-2"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
};

const PortfolioUIUXDetail = () => {
  const { title } = useParams();
  const portfolio = portfolioUIUXItems.find((item) => item.title === title);

  if (!portfolio) {
    return <h2 className="text-center mt-5">Portfolio not found</h2>;
  }

  return (
    <section className="container-fluid py-3 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h3 className="text-warning fw-semibold mt-4">Study Case</h3>
          <h2 className="display-5 fw-bold text-dark mt-2 mb-4">
            {portfolio.title}
          </h2>
          <div className="position-relative d-flex justify-content-center my-4">
            <img
              src={portfolio.detailImage}
              alt={`Preview of ${portfolio.title}`}
              className="img-fluid"
              style={{ maxWidth: "600px", maxHeight: "300px" }}
            />
          </div>
          <div className="mt-4 text-start">
            <h3 className="h5 fw-bold">About</h3>
            <p className="text-muted mt-2">{portfolio.about}</p>
          </div>
          <div className="mt-4 text-start">
            <h3 className="h5 fw-bold">Goals</h3>
            <ul className="list-group list-group-flush mt-2">
              {portfolio.goals.map((goal, index) => (
                <li key={index} className="list-group-item text-muted">
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          <PortfolioPreview portfolio={portfolio} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioUIUXDetail;
