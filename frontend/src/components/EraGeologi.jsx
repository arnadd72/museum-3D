import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Global styles
import "./EraGeologi.css"; // Style khusus halaman ini

const EraGeologi = () => {
  const [activeEra, setActiveEra] = useState(0);

  const eras = [
    {
      id: 0,
      name: "PALEOZOIKUM",
      period: "541 - 252 Juta Tahun Lalu",
      desc: "Era kehidupan purba (Ancient Life). Ini adalah masa di mana kehidupan meledak di lautan (Cambrian Explosion). Belum ada dinosaurus. Bumi didominasi oleh invertebrata laut bercangkang keras, ikan purba pertama, dan amfibi yang mulai naik ke darat. Tumbuhan paku raksasa mulai membentuk hutan pertama.",
      creatures: [
        "Trilobite",
        "Anomalocaris",
        "Dunkleosteus (Ikan Lapis Baja)",
        "Dimetrodon",
      ],
      image: "/ImageModels/paleozoic_bg.jpg", // Ganti dengan foto ilustrasi laut purba/hutan paku
      color: "#00d2ff", // Biru Laut
    },
    {
      id: 1,
      name: "MESOZOIKUM",
      period: "252 - 66 Juta Tahun Lalu",
      desc: "Zaman Kejayaan Reptil (Age of Reptiles). Dinosaurus menguasai daratan, Pterosaurus menguasai langit, dan Reptil Laut raksasa menguasai samudra. Era ini terbagi menjadi Trias, Jura, dan Kapur (Cretaceous). Berakhir dengan kepunahan massal akibat hantaman asteroid.",
      creatures: ["T-Rex", "Velociraptor", "Triceratops", "Pteranodon"],
      image: "/ImageModels/mesozoic_bg.jpg", // Ganti dengan foto Dinosaurus
      color: "#ff4d4d", // Merah Agresif
    },
    {
      id: 2,
      name: "KENOZOIKUM",
      period: "66 Juta Tahun Lalu - Sekarang",
      desc: "Zaman Kehidupan Baru (New Life). Setelah dinosaurus punah, mamalia bangkit menjadi penguasa bumi. Munculnya Megafauna (mamalia raksasa) seperti Mammoth dan Smilodon. Era ini juga menjadi saksi evolusi primata yang akhirnya mengarah pada kemunculan manusia.",
      creatures: [
        "Woolly Mammoth",
        "Smilodon (Saber-tooth)",
        "Megalodon",
        "Manusia Purba",
      ],
      image: "/ImageModels/cenozoic_bg.jpg", // Ganti dengan foto Mammoth/Es
      color: "#00ff88", // Hijau/Putih
    },
  ];

  const currentData = eras[activeEra];

  return (
    <div className="era-container fade-in">
      {/* BACKGROUND DINAMIS */}
      <div
        className="era-bg-overlay"
        style={{ backgroundImage: `url(${currentData.image})` }}
      ></div>
      <div className="era-overlay-gradient"></div>

      {/* HEADER NAVIGASI */}
      <nav className="era-navbar">
        <Link to="/" className="back-link">
          ← KEMBALI KE BERANDA
        </Link>
        <div className="system-status">MODE: EDUCATIONAL_ARCHIVE</div>
      </nav>

      <main className="era-content-wrapper">
        {/* SIDEBAR PILIHAN ERA */}
        <aside className="timeline-sidebar">
          <div className="timeline-line"></div>
          {eras.map((era, index) => (
            <button
              key={era.id}
              className={`timeline-btn ${activeEra === index ? "active" : ""}`}
              onClick={() => setActiveEra(index)}
              style={{ "--era-color": era.color }}
            >
              <span className="dot"></span>
              <span className="label">{era.name}</span>
            </button>
          ))}
        </aside>

        {/* KONTEN UTAMA */}
        <section className="era-info-panel">
          <div className="era-header-text">
            <h4 style={{ color: currentData.color }}>{currentData.period}</h4>
            <h1>{currentData.name}</h1>
          </div>

          <div className="glass-card">
            <h3>DESKRIPSI ERA</h3>
            <p>{currentData.desc}</p>

            <div className="species-list">
              <span>DOMINANT SPECIES DETECTED:</span>
              <div className="tags">
                {currentData.creatures.map((creature, i) => (
                  <div
                    key={i}
                    className="creature-tag"
                    style={{ borderColor: currentData.color }}
                  >
                    {creature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SLOT FOTO VISUALISASI */}
          <div className="visual-preview-box">
            <div className="scan-line"></div>
            <img
              src={currentData.image}
              alt={currentData.name}
              className="main-era-img"
            />
            <div className="img-caption">
              VISUALISASI EKOSISTEM /// {currentData.name}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EraGeologi;
