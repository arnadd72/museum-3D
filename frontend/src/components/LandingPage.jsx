import React, { useEffect, useRef } from "react";

const LandingPage = ({ onExplore }) => {
  const observerRef = useRef(null);

  // Logic Animasi Scroll
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".animate-hidden");
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-symbol">N</div>
          <span className="logo-text">NEXUS MUSEUM</span>
        </div>

        <div className="nav-links">
          <a href="#home" className="nav-link active">
            HOME
          </a>
          <a href="#about" className="nav-link">
            ABOUT SYSTEM
          </a>
          {/* Tombol Gallery di Navbar juga memicu pindah halaman */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onExplore();
            }}
            className="nav-link"
          >
            GALLERY
          </a>
          <a href="#" className="nav-link">
            VIRTUAL TOUR
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main id="home" className="hero-section">
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/background-kedua.mp4" type="video/mp4" />
            Browser Anda tidak mendukung video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="floating-tag">/// SYSTEM READY</div>

          <h1 className="hero-title">
            SELAMAT <br />
            <span className="outline-text">BERKUNJUNG</span>
          </h1>

          <p className="hero-desc">
            Melampaui batas waktu. Rasakan pengalaman sejarah yang hidup kembali
            melalui arsip digital dan rekonstruksi neural. Masa lalu kini
            memiliki masa depan.
          </p>

          <div className="cta-container">
            {/* Tombol ini memicu fungsi onExplore dari props */}
            <button className="explore-btn" onClick={onExplore}>
              MULAI PENJELAJAHAN
            </button>
            <div className="play-btn-wrapper">
              <div className="play-icon">▶</div>
              <span>WATCH BRAND STORY</span>
            </div>
          </div>
        </div>

        <div className="decorative-line"></div>
        <div className="coordinate-text">LAT -6.2088 // LONG 106.8456</div>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header animate-hidden slide-up">
            <h2 className="section-title">
              Artefacta:{" "}
              <span className="accent">Museum Digital Interaktif dengan</span>{" "}
              Visualisasi 3D Ultra-Realistis
            </h2>
            <div className="section-line"></div>
            <p className="section-desc">
              Platform ini bukan sekadar museum. Ini adalah{" "}
              <span className="highlight">Portal Arsip</span>
              digital yang merevolusi pelestarian sejarah. Kami mengubah artefak
              fisik menjadi data abadi, memungkinkan eksplorasi mendalam tanpa
              batasan jarak atau waktu.
            </p>
          </div>

          <div className="features-grid">
            <div
              className="feature-card animate-hidden slide-left"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="card-number">01</div>
              <h3>DIGITAL ARTIFACTS</h3>
              <p>
                Objek sejarah di-scan menggunakan LIDAR resolusi tinggi untuk
                detail tingkat mikroskopik.
              </p>
              <div className="card-decoration"></div>
            </div>

            <div
              className="feature-card animate-hidden slide-up"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="card-number">02</div>
              <h3>IMMERSIVE TIME</h3>
              <p>
                Simulasi lingkungan yang merekonstruksi atmosfer masa lalu
                secara real-time.
              </p>
              <div className="card-decoration"></div>
            </div>

            <div
              className="feature-card animate-hidden slide-right"
              style={{ transitionDelay: "500ms" }}
            >
              <div className="card-number">03</div>
              <h3>GLOBAL ACCESS</h3>
              <p>
                Akses tanpa batas ruang. Terhubung ke database sejarah dari
                seluruh penjuru dunia.
              </p>
              <div className="card-decoration"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
