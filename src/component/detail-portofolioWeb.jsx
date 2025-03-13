import { useParams } from "react-router-dom";
import portfolioWebItems from "../component/web-items"; // Sesuaikan path jika berbeda
import "../styles/detail-portfolio.css";

const PortfolioWebDetail = () => {
  const { title } = useParams();
  const portfolio = portfolioWebItems.find((item) => item.title === title);

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
              src={portfolio.image}
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
            <h3 className="h5 fw-bold">Problem</h3>
            <p className="text-muted mt-2">{portfolio.problem}</p>
          </div>
          <div className="mt-4 text-start">
            <h3 className="h5 fw-bold">Solution</h3>
            <ul className="list-group list-group-flush mt-2">
              {portfolio.solution.map((solution, index) => (
                <li key={index} className="list-group-item text-muted">
                  {solution}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 text-start">
            <h3 className="h5 fw-bold">Tech Stack</h3>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {portfolio.techStack.map((tech, index) => (
                <span key={index} className="text-muted fw-semibold">
                  {tech} {index !== portfolio.techStack.length - 1 && "•"}
                </span>
              ))}
            </div>
          </div>
          {(portfolio.githubLink || portfolio.projectLink) && (
            <div className="mt-4 text-start mb-5">
              <h3 className="h5 fw-bold">Link External</h3>

              <a
                href={portfolio.projectLink}
                className="btn btn-custom me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a
                href={portfolio.githubLink}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Project
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioWebDetail;
