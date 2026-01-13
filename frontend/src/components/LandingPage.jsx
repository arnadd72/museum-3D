import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./LandingPage.css";

const LandingPage = ({ onStart, onTimeline }) => {
  const observerRef = useRef(null);
  const scrollRef = useRef(null);
  const audioRef = useRef(null);

  // STATE
  const [isLoading, setIsLoading] = useState(true); // State Preloader
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // DATA
  const dinoImageLink =
    "https://i0.wp.com/genemil.com/wp-content/uploads/2020/07/zaman-paleozoikum.jpg?fit=800%2C600&ssl=1";

  const featuredFossils = [
    {
      id: 1,
      title: "TYRANNOSAURUS REX",
      desc: "Predator puncak era Mesozoikum (Kapur). Struktur rahang mematikan.",
      type: "VERTEBRATA",
      era: "MESOZOIKUM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ53hI5D7wMRZ4jkuZBqC-AXLvzDL39rnNQ&s",
      accentColor: "#ff4d4d",
    },
    {
      id: 2,
      title: "TRILOBITE",
      desc: "Invertebrata laut ikonik. Kehidupan kompleks paling awal.",
      type: "INVERTEBRATA",
      era: "PALEOZOIKUM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
      accentColor: "#00d2ff",
    },
    {
      id: 3,
      title: "WOOLLY MAMMOTH",
      desc: "Mamalia raksasa era Kenozoikum. Spesimen terawetkan dalam es.",
      type: "MAMALIA",
      era: "KENOZOIKUM",
      image:
        "https://media.sketchfab.com/models/58376e170c8b4507a636b5e45bcce999/thumbnails/ce3b02fdd7194d55b7afb8908312ad98/92491c00087e4d21aa7fb453582a759f.jpeg",
      accentColor: "#ffffff",
    },
    {
      id: 4,
      title: "AMMONITE",
      desc: "Moluska laut purba cangkang spiral. Fosil indeks penting.",
      type: "INVERTEBRATA",
      era: "MESOZOIKUM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdaTwKETvJtqM8A-jfuCswx-cs-Z4QXx84w&s",
      accentColor: "#FF8C00",
    },
    {
      id: 5,
      title: "VELOCIRAPTOR",
      desc: "Dinosaurus cerdas. Fosil jejak menunjukkan perilaku berburu.",
      type: "VERTEBRATA",
      era: "MESOZOIKUM",
      image:
        "https://media.sketchfab.com/models/6de8fb7fb8ed4f26844a3556a491cd9c/thumbnails/ef2080f4692342d3aa0f7ef6d7cefd26/14354e2a4cb74e07b312891a5b66375c.jpeg",
      accentColor: "#00ff88",
    },
  ];

  // 1. LOGIC PRELOADER
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // 2. LOGIC AUDIO
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current
          .play()
          .catch((e) => console.log("Audio play failed", e));
        audioRef.current.muted = false;
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  // 3. LOGIC MOBILE CHECK
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // 4. LOGIC SCROLL BUTTON
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = isMobile ? 280 : 350;
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  // 5. LOGIC AUTO SCROLL
  useEffect(() => {
    if (isMobile) return;
    const autoScrollSpeed = 1;
    let animationId;

    const startScroll = () => {
      if (scrollRef.current && !isPaused) {
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 1
        ) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += autoScrollSpeed;
        }
        animationId = requestAnimationFrame(startScroll);
      }
    };

    if (!isPaused) {
      animationId = requestAnimationFrame(startScroll);
    }
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isMobile]);

  // 6. LOGIC ANIMASI MUNCUL
  useEffect(() => {
    if (isLoading) return;

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
  }, [isLoading]);

  // --- RENDER PRELOADER ---
  if (isLoading) {
    return (
      <div className="preloader-container">
        <div className="loader-content">
          <div className="loader-circle"></div>
          <div className="loader-text">INITIALIZING SYSTEM...</div>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER UTAMA ---
  return (
    <>
      {/* AUDIO ELEMENT */}
      <audio ref={audioRef} loop>
        <source src="/ambience.mp3" type="audio/mp3" />
      </audio>

      {/* FLOATING AUDIO CONTROL */}
      <div className="audio-control" onClick={toggleAudio}>
        {isMuted ? (
          <span className="blink-text">🔇 ACTIVATE SOUND</span>
        ) : (
          <span className="sound-active">
            🔊 AUDIO ON{" "}
            <div className="equalizer">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </span>
        )}
      </div>

      <nav className="navbar animate-fade-down">
        <div className="logo-section">
          <div className="logo-symbol">JP</div>
          <span className="logo-text">JEJAK PURBA</span>
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-link active">
            HOME
          </a>
          <Link to="/era-geologi" className="nav-link">
            ERA GEOLOGI
          </Link>
          <Link to="/gallery" className="nav-link">
            GALLERY
          </Link>
          <Link to="/visual-3d" className="nav-link">
            VISUAL 3D
          </Link>
        </div>
      </nav>

      <main id="home" className="hero-section">
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/background-kedua.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content animate-hidden slide-up">
          <div className="floating-tag">SYSTEM ONLINE</div>
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
            <button className="explore-btn" onClick={onStart}>
              MULAI EKSKAVASI
            </button>
            <div className="play-btn-wrapper" onClick={onTimeline}>
              <div className="play-icon">▶</div>
              <span>LIHAT TIMELINE BUMI</span>
            </div>
          </div>
        </div>
        <div className="decorative-line"></div>

        {/* TEXT COORDINATE */}
        <div className="coordinate-text">
          LAT -6.2088 // LONG 106.8456 // ERA: HOLOCENE
        </div>

        {/* --- WATERMARK PATCH (NEW) --- */}
        {/* Kotak hitam ini akan menutupi watermark di pojok kanan bawah video */}
        <div className="watermark-patch"></div>
      </main>

      {/* --- STATS BAR --- */}
      <div className="stats-section">
        <div className="stat-item">
          <h2>3</h2>
          <p>ERA GEOLOGI</p>
        </div>
        <div className="stat-separator">/</div>
        <div className="stat-item">
          <h2>50+</h2>
          <p>SPESIMEN DIGITAL</p>
        </div>
        <div className="stat-separator">/</div>
        <div className="stat-item">
          <h2>100%</h2>
          <p>INTERAKTIF</p>
        </div>
      </div>

      <section id="about" className="about-section">
        <div className="moving-lights">
          <div className="light-blob blob-1"></div>
          <div className="light-blob blob-2"></div>
          <div className="light-blob blob-3"></div>
        </div>

        <div className="about-container">
          <div className="about-header animate-hidden slide-up">
            <div className="about-text-content">
              <h2 className="section-title">
                Klasifikasi <span className="accent">Kehidupan Purba</span>
              </h2>
              <div className="section-line"></div>
              <p className="section-desc">
                Platform ini menyajikan pemetaan kehidupan purba berdasarkan
                pendekatan ilmiah. Setiap spesimen diklasifikasikan menurut{" "}
                <span className="highlight">
                  Era Geologi, jenis fosil, dan kelompok biologis
                </span>
                , sehingga memudahkan pemahaman hubungan antara makhluk hidup,
                lingkungan, dan perubahan Bumi.
              </p>
            </div>
            <div className="about-image-slot">
              <div className="header-image-wrapper">
                <img
                  src={dinoImageLink}
                  alt="Dinosaurus Ilustrasi"
                  className="header-img"
                />
                <div className="img-overlay"></div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-hidden slide-left">
              <div className="card-number">01</div>
              <h3>KELOMPOK HEWAN</h3>
              <p>
                Vertebrata (Dinosaurus, Mamalia), Invertebrata (Trilobite), dan
                Mikrofosil.
              </p>
              <Link
                to="/gallery"
                state={{ targetCategory: "BIO" }}
                className="read-more-link"
              >
                LIHAT SELENGKAPNYA →
              </Link>
              <div className="card-decoration"></div>
            </div>
            <div className="feature-card animate-hidden slide-up">
              <div className="card-number">02</div>
              <h3>JENIS FOSIL</h3>
              <p>
                Fosil Tubuh (Tulang/Gigi), Fosil Jejak (Tapak Kaki), dan Fosil
                Terawetkan (Amber/Es).
              </p>
              <Link
                to="/gallery"
                state={{ targetCategory: "FOSSIL" }}
                className="read-more-link"
              >
                LIHAT SELENGKAPNYA →
              </Link>
              <div className="card-decoration"></div>
            </div>
            <div className="feature-card animate-hidden slide-right">
              <div className="card-number">03</div>
              <h3>ERA GEOLOGI</h3>
              <p>
                Paleozoikum (Awal), Mesozoikum (Dinosaurus), hingga Kenozoikum
                (Mamalia).
              </p>
              <Link to="/era-geologi" className="read-more-link">
                LIHAT SELENGKAPNYA →
              </Link>
              <div className="card-decoration"></div>
            </div>
          </div>

          <div className="collection-preview-section animate-hidden slide-up">
            <div className="preview-header">
              <div className="header-text-group">
                <h3>
                  KOLEKSI <span className="accent">SPESIMEN</span>
                </h3>
                <p className="preview-desc">
                  Arsip digital makhluk purba pilihan yang direkonstruksi dengan
                  detail ilmiah.
                </p>
              </div>
              <div className="scroll-controls">
                <button
                  className="scroll-btn"
                  onClick={() => scroll("left")}
                  aria-label="Scroll Left"
                >
                  ←
                </button>
                <div className="scroll-indicator">
                  <span>{isMobile ? "SWIPE ///" : "AUTO SCROLL ///"}</span>
                </div>
                <button
                  className="scroll-btn"
                  onClick={() => scroll("right")}
                  aria-label="Scroll Right"
                >
                  →
                </button>
              </div>
            </div>

            <div className="gallery-track-wrapper">
              <div
                className="gallery-track"
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                {/* Looping Data 3 Kali untuk Infinite Scroll Effect */}
                {[
                  ...featuredFossils,
                  ...featuredFossils,
                  ...featuredFossils,
                ].map((item, index) => (
                  <FossilCard key={index} item={item} onStart={onStart} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>JP</h2>
            <p>Digital Museum Project</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>EKSPLORASI</h4>
              <a href="#home">Beranda</a>
              <Link to="/era-geologi">Era Geologi</Link>
              <Link to="/gallery">Galeri Fosil</Link>
            </div>
            <div className="link-group">
              <h4>TEKNOLOGI</h4>
              <span>React JS</span>
              <span>Three.js (Visual 3D)</span>
              <span>CSS Animation</span>
            </div>
            <div className="link-group">
              <h4>TIM PENGEMBANG</h4>
              <span>Yasvin Syahgana</span>
              <span>Anwar Hanani</span>
              <span>Ihsan Nafis</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Jejak Purba. Museum Digital & Galeri Interaktif.</p>
        </div>
      </footer>
    </>
  );
};

const FossilCard = ({ item, onStart }) => (
  <div className="preview-card elegant-card">
    <div
      className="preview-visual"
      style={{ "--item-color": item.accentColor }}
    >
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
        <span className="scan-line"></span>FSL
      </div>
    </div>
    <div className="preview-info">
      <h4>{item.title}</h4>
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
      <button className="view-detail-btn elegant-btn" onClick={onStart}>
        ANALISIS DATA <span className="btn-arrow">→</span>
      </button>
    </div>
  </div>
);

export default LandingPage;
