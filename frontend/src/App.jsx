import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";

// Import Halaman
import LandingPage from "./components/LandingPage";
import ArtifactView from "./components/ArtifactView";
import EraGeologi from "./components/EraGeologi";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Rute 1: Halaman Utama */}
          <Route path="/" element={<HomeWrapper />} />

          {/* Rute 2: Halaman Detail Fosil (3D) */}
          <Route path="/artifact-view" element={<ArtifactViewWrapper />} />

          {/* Rute 3: Halaman Era Geologi (Edukasi) */}
          <Route path="/era-geologi" element={<EraGeologi />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper Components untuk Navigasi
const HomeWrapper = () => {
  const navigate = useNavigate();
  return <LandingPage onExplore={() => navigate("/artifact-view")} />;
};

const ArtifactViewWrapper = () => {
  const navigate = useNavigate();
  return <ArtifactView onBack={() => navigate("/")} />;
};

export default App;
