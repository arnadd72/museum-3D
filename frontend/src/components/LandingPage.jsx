import React, { useEffect, useRef } from "react";
import "../App.css";

const LandingPage = ({ onExplore }) => {
  const observerRef = useRef(null);

  // --- DATA: 7 ARTEFAK ---
  const featuredArtifacts = [
    {
      id: 1,
      title: "KERIS NOGO SOSRO",
      desc: "Mahakarya metalurgi era Majapahit dengan pamor meteorit.",
      type: "WEAPONRY",
      color: "linear-gradient(135deg, #FFD700 0%, #B8860B 100%)",
    },
    {
      id: 2,
      title: "MAHKOTA BINOKASIH",
      desc: "Simbol kedaulatan Kerajaan Sumedang Larang berbahan emas murni.",
      type: "ROYALTY",
      color: "linear-gradient(135deg, #00d2ff 0%, #0055ff 100%)",
    },
    {
      id: 3,
      title: "PRASASTI CIARUTEUN",
      desc: "Batu tulis peninggalan Tarumanegara dengan cetakan tapak kaki.",
      type: "INSCRIPTION",
      color: "linear-gradient(135deg, #ff4d4d 0%, #a60000 100%)",
    },
    {
      id: 4,
      title: "TOPENG PANJI",
      desc: "Artefak topeng kayu yang merepresentasikan kehalusan budi manusia.",
      type: "ART",
      color: "linear-gradient(135deg, #00ff88 0%, #008844 100%)",
    },
    {
      id: 5,
      title: "GONG KYAI PRADAH",
      desc: "Gamelan keramat peninggalan Mataram Kuno yang digunakan untuk upacara.",
      type: "INSTRUMENT",
      color: "linear-gradient(135deg, #A020F0 0%, #4B0082 100%)", // Ungu
    },
    {
      id: 6,
      title: "RELIEF BOROBUDUR",
      desc: "Potongan panel relief Karmawibhangga yang menceritakan hukum sebab akibat.",
      type: "RELIEF",
      color: "linear-gradient(135deg, #FF8C00 0%, #FF4500 100%)", // Oranye
    },
    {
      id: 7,
      title: "PERAHU PHINISI",
      desc: "Miniatur kapal layar legendaris suku Bugis penjelajah samudra.",
      type: "MARITIME",
      color: "linear-gradient(135deg, #00CED1 0%, #20B2AA 100%)", // Cyan Gelap
    },
  ];

  // Logic Animasi Scroll (Intersection Observer)
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
            melalui arsip digital.
          </p>
          <div className="cta-container">
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
              Artefacta: <span className="accent">Museum Digital</span>
            </h2>
            <div className="section-line"></div>
            <p className="section-desc">
              Platform ini bukan sekadar museum. Ini adalah{" "}
              <span className="highlight">Portal Arsip</span> digital.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-hidden slide-left">
              <div className="card-number">01</div>
              <h3>DIGITAL ARTIFACTS</h3>
              <p>Scan LIDAR resolusi tinggi.</p>
              <div className="card-decoration"></div>
            </div>
            <div className="feature-card animate-hidden slide-up">
              <div className="card-number">02</div>
              <h3>IMMERSIVE TIME</h3>
              <p>Simulasi lingkungan masa lalu.</p>
              <div className="card-decoration"></div>
            </div>
            <div className="feature-card animate-hidden slide-right">
              <div className="card-number">03</div>
              <h3>GLOBAL ACCESS</h3>
              <p>Akses tanpa batas ruang.</p>
              <div className="card-decoration"></div>
            </div>
          </div>

          {/* --- COLLECTION PREVIEW (INFINITE LOOP) --- */}
          <div
            className="collection-preview-section animate-hidden slide-up"
            style={{ marginTop: "8rem" }}
          >
            <div className="preview-header">
              {/* Ubah teks indikator agar sesuai mode manual */}
              <h3>
                FEATURED <span className="accent">COLLECTION</span>
              </h3>
              <div className="scroll-indicator">
                <span style={{ fontSize: "1.2rem" }}>←</span> DRAG OR SCROLL TO
                EXPLORE <span style={{ fontSize: "1.2rem" }}>→</span>
              </div>
            </div>

            {/* Hapus div ".scroller-mask" karena tidak butuh masking loop lagi */}

            {/* Track Scroll Manual */}
            <div className="gallery-track manual-scroll">
              {/* HANYA RENDER DATA ASLI (SATU KALI SAJA) */}
              {featuredArtifacts.map((item) => (
                <div key={item.id} className="preview-card elegant-card">
                  {/* Bagian Visual dengan Efek Baru */}
                  <div
                    className="preview-visual"
                    style={{ "--item-color": item.color }}
                  >
                    <div className="item-type-badge">{item.type}</div>

                    {/* Background Gradient + Pattern Overlay */}
                    <div
                      className="visual-bg"
                      style={{ background: item.color }}
                    ></div>
                    <div className="pattern-overlay"></div>
                    <div className="visual-overlay-gradient"></div>

                    {/* Ikon Tengah */}
                    <div className="visual-center-icon">
                      <span className="scan-line"></span>
                      3D
                    </div>
                  </div>

                  <div className="preview-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <button
                      className="view-detail-btn elegant-btn"
                      onClick={onExplore}
                    >
                      ACCESS DATA <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              ))}
              {/* Akhir Render Data Asli */}
            </div>
          </div>
          {/* --- END COLLECTION --- */}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
