import React, { useState } from "react";
import "./App.css";

// Import komponen yang sudah dipisah
import LandingPage from "./components/LandingPage";
import ArtifactView from "./components/ArtifactView";

function App() {
  // State untuk menentukan tampilan aktif: 'landing' atau 'artifact'
  const [viewState, setViewState] = useState("landing");

  return (
    <div className="app-container">
      {viewState === "landing" ? (
        // Tampilkan Landing Page, oper fungsi untuk pindah ke Artifact
        <LandingPage onExplore={() => setViewState("artifact")} />
      ) : (
        // Tampilkan Artifact View, oper fungsi untuk kembali ke Landing
        <ArtifactView onBack={() => setViewState("landing")} />
      )}
    </div>
  );
}

export default App;
