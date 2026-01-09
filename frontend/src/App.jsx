import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* 3. MENU BAR LENGKAP */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-symbol">N</div>
          <span className="logo-text">NEXUS MUSEUM</span>
        </div>

        <div className="nav-links">
          <a href="#home" className="nav-link active">
            HOME
          </a>
          <a href="#gallery" className="nav-link">
            GALLERY
          </a>
          <a href="#virtual-tour" className="nav-link">
            VIRTUAL TOUR
          </a>
          <a href="#history" className="nav-link">
            ARCHIVE
          </a>
        </div>

        <div className="nav-actions">
          <button className="ticket-btn">GET TICKETS</button>
        </div>
      </nav>

      {/* 2. VIDEO BRAND & HERO SECTION */}
      <main className="hero-section">
        <div className="video-wrapper">
          {/* Video Placeholder Futuristik */}
          <video autoPlay loop muted playsInline className="hero-video">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-technological-interface-9831-large.mp4"
              type="video/mp4"
            />
            Browser Anda tidak mendukung video tag.
          </video>

          {/* Overlay Gelap agar teks terbaca */}
          <div className="video-overlay"></div>
        </div>

        {/* 1. ELEMEN DESAIN UNIK (Typography & Layout) */}
        <div className="hero-content">
          <div className="floating-tag">/// EST. 2025 /// SYSTEM ONLINE</div>

          <h1 className="hero-title">
            REDEFINING <br />
            <span className="outline-text">HERITAGE</span>
          </h1>

          <p className="hero-desc">
            Melampaui batas waktu. Rasakan pengalaman sejarah yang hidup kembali
            melalui arsip digital dan rekonstruksi neural. Masa lalu kini
            memiliki masa depan.
          </p>

          <div className="cta-container">
            <button className="explore-btn">MULAI PENJELAJAHAN</button>
            <div className="play-btn-wrapper">
              <div className="play-icon">▶</div>
              <span>WATCH BRAND STORY</span>
            </div>
          </div>
        </div>

        {/* Elemen Dekoratif Anti-Mainstream */}
        <div className="decorative-line"></div>
        <div className="coordinate-text">LAT -6.2088 // LONG 106.8456</div>
      </main>
    </div>
  );
}

export default App;
