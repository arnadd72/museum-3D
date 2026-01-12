import React, { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { encyclopediaData } from "../data/encyclopediaData";
import "../App.css";
import "./Visual3DHub.css";

const Visual3DHub = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // 1. SCROLL RESET: Halaman mulai dari atas saat dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. DATA FLATTENING: Meratakan struktur data
  const allItems = useMemo(() => {
    let collected = [];
    if (encyclopediaData) {
      Object.keys(encyclopediaData).forEach((mainKey) => {
        const mainCategory = encyclopediaData[mainKey];
        if (mainCategory.subCategories) {
          mainCategory.subCategories.forEach((sub) => {
            if (sub.items) {
              sub.items.forEach((item) => {
                collected.push({
                  ...item,
                  category: mainCategory.title,
                  categoryId: mainKey,
                  subCategory: sub.title,
                  color: mainCategory.color,
                });
              });
            }
          });
        }
      });
    }
    return collected;
  }, []);

  // 3. LOGIKA FILTER GANDA (Category + Search Text)
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // Cek Filter Kategori
      const matchesCategory = filter === "ALL" || item.categoryId === filter;

      // Cek Search Query (Case Insensitive)
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.subCategory.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery, allItems]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleProceed = () => {
    if (selectedItem) {
      navigate("/model-viewer", { state: { itemData: selectedItem } });
    }
  };

  return (
    <div className="hub-container">
      <div className="hub-grid-bg"></div>

      <nav className="hub-nav">
        <Link to="/" className="hub-back-btn">
          ← KEMBALI KE MENU UTAMA
        </Link>
        <div className="hub-title">KOLEKSI MODEL 3D</div>
        <div className="hub-status">
          <span className="status-dot"></span> SISTEM: ONLINE
        </div>
      </nav>

      <main className="hub-content">
        <div className="hub-header">
          <h1>PILIH SPESIMEN</h1>

          {/* INPUT SEARCH SCI-FI */}
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="KETIK NAMA SPESIES..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search-icon">🔍</div>
          </div>

          {/* FILTER BUTTONS */}
          <div className="filter-bar">
            {["ALL", "BIO", "FOSSIL", "ERA"].map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f === "BIO"
                  ? "MAKHLUK HIDUP"
                  : f === "ERA"
                  ? "ERA ZAMAN"
                  : f === "FOSSIL"
                  ? "JENIS FOSIL"
                  : "SEMUA DATA"}
              </button>
            ))}
          </div>
        </div>

        {/* GRID CONTENT ATAU PESAN KOSONG */}
        {filteredItems.length > 0 ? (
          <div className="hub-grid">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="data-chip fade-in-up"
                onClick={() => handleItemClick(item)}
                style={{
                  "--accent": item.color,
                  animationDelay: `${idx * 0.05}s`,
                }}
              >
                <div className="chip-img-box">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="chip-overlay"></div>
                </div>
                <div className="chip-info">
                  <div className="chip-cat">{item.subCategory}</div>
                  <h3>{item.name}</h3>
                  <div className="chip-decor-line"></div>
                </div>
                <div className="corner-decor"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results fade-in-up">
            <div className="error-icon">⚠️</div>
            <h2>DATA TIDAK DITEMUKAN</h2>
            <p>
              Spesimen "{searchQuery}" tidak ada dalam database klasifikasi ini.
            </p>
            <button
              className="reset-search-btn"
              onClick={() => {
                setSearchQuery("");
                setFilter("ALL");
              }}
            >
              RESET PENCARIAN
            </button>
          </div>
        )}
      </main>

      {/* MODAL KONFIRMASI */}
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-box slide-up">
            <div
              className="modal-header"
              style={{ background: selectedItem.color }}
            >
              KONFIRMASI VISUALISASI 3D
            </div>
            <div className="modal-body">
              <div className="modal-img">
                <img src={selectedItem.image} alt={selectedItem.name} />
                <div
                  className="scan-anim"
                  style={{
                    boxShadow: `0 0 10px ${selectedItem.color}`,
                    background: selectedItem.color,
                  }}
                ></div>
              </div>
              <div className="modal-text">
                <h2>BUKA SIMULASI?</h2>
                <h4 style={{ color: selectedItem.color }}>
                  OBJEK: {selectedItem.name}
                </h4>
                <p>{selectedItem.desc}</p>
                <div className="modal-stats">
                  <span>Status: Siap Ditampilkan</span>
                  <span>Tipe: Model Digital</span>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setSelectedItem(null)}
              >
                BATAL
              </button>
              <button
                className="launch-btn"
                style={{
                  border: `1px solid ${selectedItem.color}`,
                  color: selectedItem.color,
                }}
                onClick={handleProceed}
              >
                MULAI SIMULASI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visual3DHub;
