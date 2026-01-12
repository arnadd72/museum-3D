import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./EraGeologi.css";

const EraGeologi = () => {
  const [activeEra, setActiveEra] = useState(0);

  const eras = [
    {
      id: 0,
      name: "PALEOZOIKUM",
      period: "541 - 252 Juta Tahun Lalu",
      desc: "Zaman Paleozoikum dikenal sebagai era kehidupan purba (Ancient Life) yang berlangsung sekitar 541 hingga 252 juta tahun lalu. Pada masa ini terjadi peristiwa besar Ledakan Kambrium, ketika kehidupan laut berkembang sangat pesat. Belum ada dinosaurus pada era ini. Bumi didominasi oleh invertebrata laut bercangkang keras, predator laut purba seperti Anomalocaris, kemunculan ikan bertulang pertama, serta amfibi awal yang mulai beradaptasi dan naik ke daratan.",
      creatures: ["Trilobite", "Anomalocaris", "Dunkleosteus", "Dimetrodon"],
      image: "/ImageModels/EraGeologi/foto-paleozoikum.jpg", // Background utama
      color: "#00d2ff",
      // DATA GALERI BARU
      gallery: [
        {
          title: "ANOMALOCARIS",
          img: "/ImageModels/EraGeologi/anomalocaris.jpg",
        },
        {
          title: "EARLY AMPHIBIAN",
          img: "/ImageModels/EraGeologi/amphibian.jpg",
        },
      ],
    },
    {
      id: 1,
      name: "MESOZOIKUM",
      period: "252 - 66 Juta Tahun Lalu",
      desc: "Zaman Mesozoikum dikenal sebagai era kehidupan pertengahan dan sering disebut sebagai Zaman Dinosaurus. Era ini berlangsung sekitar 252 hingga 66 juta tahun lalu, setelah berakhirnya kepunahan massal Paleozoikum. Pada masa ini, dinosaurus menjadi penguasa daratan, sementara reptil laut raksasa mengisi samudra dan pterosaurus menguasai langit. Selain itu, tumbuhan berbunga pertama mulai muncul, serta mamalia dan burung awal berevolusi dalam ukuran kecil.",
      creatures: ["T-Rex", "Velociraptor", "Triceratops", "Pteranodon"],
      image: "/ImageModels/EraGeologi/foto-mesozoikum.jpg",
      color: "#ff4d4d",
      gallery: [
        { title: "TYRANNOSAURUS REX", img: "/ImageModels/EraGeologi/trex.jpg" },
        {
          title: "VELOCIRAPTOR CLAW",
          img: "/ImageModels/EraGeologi/velociraptor.webp",
        },
      ],
    },
    {
      id: 2,
      name: "KENOZOIKUM",
      period: "66 Juta Tahun Lalu - Sekarang",
      desc: "Zaman Kenozoikum dikenal sebagai era kehidupan baru yang dimulai sekitar 66 juta tahun lalu hingga sekarang. Setelah kepunahan dinosaurus, mamalia berkembang pesat dan menjadi kelompok dominan di darat. Pada era ini muncul megafauna seperti Mammoth dan Smilodon, evolusi burung modern, serta perkembangan manusia yang akhirnya membentuk peradaban dan teknologi.",
      creatures: ["Woolly Mammoth", "Smilodon", "Megalodon", "Human"],
      image: "/ImageModels/EraGeologi/foto-kenozoikum.jpg",
      color: "#00ff88",
      gallery: [
        { title: "WOOLLY MAMMOTH", img: "/ImageModels/EraGeologi/mammoth.jpg" },
        {
          title: "SABER TOOTH TIGER",
          img: "/ImageModels/EraGeologi/smilodon.webp",
        },
      ],
    },
  ];

  const currentData = eras[activeEra];

  return (
    <div className="era-container fade-in">
      {/* BACKGROUND */}
      <div
        className="era-bg-overlay"
        style={{ backgroundImage: `url(${currentData.image})` }}
      ></div>
      <div className="era-overlay-gradient"></div>

      {/* NAVBAR */}
      <nav className="era-navbar">
        <Link to="/" className="back-link">
          ← KEMBALI KE BERANDA
        </Link>
        <div className="system-status"></div>
      </nav>

      <main className="era-content-wrapper">
        {/* SIDEBAR */}
        <aside className="timeline-sidebar">
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
              <span>DOMINANT SPECIES:</span>
              <div className="tags">
                {currentData.creatures.map((c, i) => (
                  <div
                    key={i}
                    className="creature-tag"
                    style={{ borderColor: currentData.color }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- BAGIAN GALERI FOTO GRID --- */}
          <div className="era-gallery-section">
            <h3 style={{ color: currentData.color }}>VISUALISASI EKOSISTEM</h3>

            <div className="gallery-grid">
              {/* Foto Utama (Besar) - Mengambil foto background/image utama */}
              <div className="gallery-item main-item">
                <div className="scan-line"></div>
                <img src={currentData.image} alt="Main Visual" />
                <div className="img-caption">SKETSA {currentData.name}</div>
              </div>

              {/* Foto-foto Detail dari Array Gallery */}
              {currentData.gallery.map((item, idx) => (
                <div key={idx} className="gallery-item sub-item">
                  <img src={item.img} alt={item.title} />
                  <div className="img-caption">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EraGeologi;
