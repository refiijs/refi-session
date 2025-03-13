import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import greenhavenImg from "../assets/greenhaven.png";
import ekrafImg from "../assets/web-ekraf.png";

const projects = [
  {
    title: "Ekonomi Kreatif",
    category: "Website",
    description:
      "An innovative platform designed to revolutionize the concert ticketing experience by integrating charitable contributions into every ticket sold.",
    image: ekrafImg,
    studyCaseLink: "/portfolio/Ekonomi%20Kreatif",
    projectLink: "https://ekraf-ta2.web.app/",
  },
  {
    title: "Green Haven",
    category: "Website",
    description:
      "An innovative solution to create green spaces, maximize the use of narrow land in residential areas, and increase public understanding with the help of urban farming implementation.",
    image: greenhavenImg,
    studyCaseLink: "/portfolio/GreenHaven",
    projectLink: "https://green-haven.vercel.app/",
  },
];

const NewProjects = () => {
  const navigate = useNavigate();
  return (
    <section id="projects" className="py-5 text-center bg-light">
      <div className="col-lg-10 mx-auto">
        <h3 className="text-warning">Recent Projects</h3>
        <h1 className="fw-bold text-dark">Explore My Portfolio</h1>
        <p className="text-muted py-4">
          Designing visual experiences, providing solutions, and ready to
          collaborate
        </p>

        <div className="container mt-5">
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="py-4 w-100">
                <div className="card shadow-sm border-0">
                  <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid rounded-top w-100"
                      />
                    </div>
                    <div className="col-md-6 px-4">
                      <div className="card-body text-start">
                        <p className="text-warning mb-1">{project.category}</p>
                        <h5 className="card-title fw-bold text-dark fs-3">
                          {project.title}
                        </h5>
                        <p className="card-text text-muted mt-4">
                          {project.description}
                        </p>
                        <div className="d-flex gap-2 mt-3">
                          <button
                            className="btn btn-custom btn-lg"
                            onClick={() =>
                              (window.location.href = project.studyCaseLink)
                            }
                          >
                            Study Case
                          </button>

                          <button
                            className="btn btn-outline"
                            onClick={() =>
                              window.open(project.projectLink, "_blank")
                            }
                          >
                            Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="btn btn-custom btn-lg mt-5 mb-4"
          onClick={() => navigate("/portfolio")}
        >
          View more projects
        </button>
      </div>
    </section>
  );
};

export default NewProjects;
