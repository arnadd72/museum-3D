import React, { useEffect, useRef } from "react";
import "../App.css";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = ({ onExplore }) => {
  const observerRef = useRef(null);

  // --- DATA FOSIL & HEWAN PURBA ---
  // Kategori: Vertebrata, Invertebrata, Mikrofosil
  // Era: Paleozoikum, Mesozoikum, Kenozoikum
  const featuredFossils = [
    {
      id: 1,
      title: "TYRANNOSAURUS REX",
      desc: "Predator puncak era Mesozoikum (Kapur). Fosil tubuh yang menunjukkan struktur rahang mematikan.",
      type: "VERTEBRATA",
      era: "MESOZOIKUM",
      image: "/ImageModels/trex.jpg", // Pastikan ada gambar ini
      accentColor: "#ff4d4d", // Merah (Bahaya/Predator)
    },
    {
      id: 2,
      title: "TRILOBITE",
      desc: "Invertebrata laut ikonik dari era Paleozoikum. Salah satu bentuk kehidupan kompleks paling awal.",
      type: "INVERTEBRATA",
      era: "PALEOZOIKUM",
      image: "/ImageModels/trilobite.jpg",
      accentColor: "#00d2ff", // Biru (Laut)
    },
    {
      id: 3,
      title: "WOOLLY MAMMOTH",
      desc: "Mamalia raksasa era Kenozoikum. Sering ditemukan sebagai fosil terawetkan dalam es (Permafrost).",
      type: "MAMALIA",
      era: "KENOZOIKUM",
      image: "/ImageModels/mammoth.jpg",
      accentColor: "#ffffff", // Putih (Es/Salju)
    },
    {
      id: 4,
      title: "AMMONITE",
      desc: "Moluska laut purba dengan cangkang spiral. Fosil indeks penting untuk penanggalan lapisan batuan.",
      type: "INVERTEBRATA",
      era: "MESOZOIKUM",
      image: "/ImageModels/ammonite.jpg",
      accentColor: "#FF8C00", // Oranye (Cangkang)
    },
    {
      id: 5,
      title: "VELOCIRAPTOR",
      desc: "Dinosaurus teropoda kecil namun cerdas. Fosil jejak (Trace Fossil) sering menunjukkan perilaku berburu.",
      type: "VERTEBRATA",
      era: "MESOZOIKUM",
      image: "/ImageModels/velociraptor.jpg",
      accentColor: "#00ff88", // Hijau (Lincah)
    },
    {
      id: 6,
      title: "ARCHAEOPTERYX",
      desc: "Fosil transisi penting yang menghubungkan dinosaurus non-unggas dengan burung modern.",
      type: "TRANSISI",
      era: "JURA AKHIR",
      image: "/ImageModels/archaeopteryx.jpg",
      accentColor: "#A020F0", // Ungu (Misterius/Langka)
    },
    {
      id: 7,
      title: "MEGALODON TOOTH",
      desc: "Gigi hiu raksasa prasejarah. Sisa fosil paling umum dari predator laut terbesar sepanjang masa.",
      type: "MIKRO/BAGIAN",
      era: "KENOZOIKUM",
      image: "/ImageModels/megalodon.jpg",
      accentColor: "#00CED1", // Cyan Gelap
    },
  ];

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
          <span className="logo-text">NEXUS PALEO</span>
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-link active">
            HOME
          </a>

          {/* INI YANG DIUBAH: Menggunakan Link ke route /era-geologi */}
          <Link to="/era-geologi" className="nav-link">
            ERA GEOLOGI
          </Link>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onExplore();
            }}
            className="nav-link"
          >
            KOLEKSI FOSIL
          </a>
          <a href="#" className="nav-link">
            LABORATORIUM
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main id="home" className="hero-section">
        <div className="video-wrapper">
          {/* SAYA SARANKAN GANTI VIDEO BACKGROUND DENGAN TEMA ALAM/HUTAN PURBA/DNA */}
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/background-kedua.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="floating-tag">/// PALEO-ARCHIVE READY</div>
          <h1 className="hero-title">
            JEJAK <br />
            <span className="outline-text">PRASEJARAH</span>
          </h1>
          <p className="hero-desc">
            Menghidupkan kembali raksasa masa lalu. Eksplorasi kehidupan dari
            era Paleozoikum hingga Kenozoikum melalui rekonstruksi digital
            presisi tinggi.
          </p>
          <div className="cta-container">
            <button className="explore-btn" onClick={onExplore}>
              MULAI EKSKAVASI
            </button>
            <div className="play-btn-wrapper">
              <div className="play-icon">▶</div>
              <span>LIHAT TIMELINE BUMI</span>
            </div>
          </div>
        </div>
        <div className="decorative-line"></div>
        <div className="coordinate-text">
          LAT -6.2088 // LONG 106.8456 // ERA: HOLOCENE
        </div>
      </main>

      {/* ABOUT SECTION (Penjelasan Klasifikasi) */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header animate-hidden slide-up">
            <h2 className="section-title">
              Klasifikasi <span className="accent">Kehidupan Purba</span>
            </h2>
            <div className="section-line"></div>
            <p className="section-desc">
              Database kami mengkategorikan spesimen berdasarkan{" "}
              <span className="highlight">Era Geologi</span>,
              <span className="highlight">Jenis Fosil</span>, dan{" "}
              <span className="highlight">Kelompok Biologis</span>.
            </p>
          </div>

          {/* GRID FITUR: Diganti dengan Klasifikasi Anda */}
          <div className="features-grid">
            <div className="feature-card animate-hidden slide-left">
              <div className="card-number">01</div>
              <h3>KELOMPOK HEWAN</h3>
              <p>
                Vertebrata (Dinosaurus, Mamalia), Invertebrata (Trilobite), dan
                Mikrofosil.
              </p>
              <div className="card-decoration"></div>
            </div>
            <div className="feature-card animate-hidden slide-up">
              <div className="card-number">02</div>
              <h3>JENIS FOSIL</h3>
              <p>
                Fosil Tubuh (Tulang/Gigi), Fosil Jejak (Tapak Kaki), dan Fosil
                Terawetkan (Amber/Es).
              </p>
              <div className="card-decoration"></div>
            </div>
            <div className="feature-card animate-hidden slide-right">
              <div className="card-number">03</div>
              <h3>ERA GEOLOGI</h3>
              <p>
                Paleozoikum (Awal), Mesozoikum (Dinosaurus), hingga Kenozoikum
                (Mamalia).
              </p>
              <div className="card-decoration"></div>
            </div>
          </div>

          {/* --- COLLECTION PREVIEW --- */}
          <div
            className="collection-preview-section animate-hidden slide-up"
            style={{ marginTop: "8rem" }}
          >
            <div className="preview-header">
              <h3>
                KOLEKSI <span className="accent">SPESIMEN</span>
              </h3>
              <div className="scroll-indicator">
                <span style={{ fontSize: "1.2rem" }}>←</span> GESER UNTUK
                MELIHAT
                <span style={{ fontSize: "1.2rem" }}>→</span>
              </div>
            </div>

            <div className="gallery-track manual-scroll">
              {featuredFossils.map((item) => (
                <div key={item.id} className="preview-card elegant-card">
                  <div
                    className="preview-visual"
                    style={{ "--item-color": item.accentColor }}
                  >
                    {/* Badge menampilkan ERA */}
                    <div className="item-type-badge">{item.era}</div>

                    <div
                      className="visual-bg"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundColor: item.accentColor,
                      }}
                    ></div>

                    <div className="pattern-overlay"></div>
                    <div className="visual-overlay-gradient"></div>

                    <div className="visual-center-icon">
                      <span className="scan-line"></span>
                      FSL {/* Singkatan Fosil */}
                    </div>
                  </div>

                  <div className="preview-info">
                    <h4>{item.title}</h4>
                    {/* Menampilkan Tipe Hewan kecil di atas deskripsi */}
                    <small
                      style={{
                        color: item.accentColor,
                        letterSpacing: "1px",
                        marginBottom: "0.5rem",
                        display: "block",
                        fontWeight: "bold",
                      }}
                    >
                      {item.type}
                    </small>
                    <p>{item.desc}</p>
                    <button
                      className="view-detail-btn elegant-btn"
                      onClick={onExplore}
                    >
                      ANALISIS DATA <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* --- END COLLECTION --- */}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
