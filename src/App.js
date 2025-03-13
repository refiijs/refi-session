import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./App.css";
import NavigationBar from "./component/navbar";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Certifications from "./pages/certification";
import AboutMe from "./pages/about";
import Footer from "./component/footer";
import PortfolioUIUXDetail from "./component/detail-portfolioUIUX";
import PortfolioWebDetail from "./component/detail-portofolioWeb";
import portfolioUIUXItems from "./component/uiux-items";
import portfolioWebItems from "./component/web-items";

function App() {
  return (
    <Router basename="/refi-session">
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certification" element={<Certifications />} />
          <Route path="/about" element={<AboutMe />} />

          {/* Detail Portfolio: Menentukan kategori berdasarkan type */}
          <Route path="/portfolio/:title" element={<PortfolioDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

// Komponen untuk menangani detail portfolio
const PortfolioDetail = () => {
  const { title } = useParams();

  // Cek apakah item ada di UIUX atau Web
  const portfolioUIUX = portfolioUIUXItems.find((item) => item.title === title);
  const portfolioWeb = portfolioWebItems.find((item) => item.title === title);

  if (portfolioUIUX) return <PortfolioUIUXDetail />;
  if (portfolioWeb) return <PortfolioWebDetail />;

  return <h2 className="text-center mt-5">Portfolio not found</h2>;
};

export default App;
