import React from "react";
import "./App.css";

function App() {
  const items = [
    {
      year: "1293",
      title: "Keris Majapahit",
      cat: "ARCHAEOLOGY",
      desc: "Simbol legitimasi kekuasaan imperium maritim.",
    },
    {
      year: "1945",
      title: "Naskah Proklamasi",
      cat: "ARCHIVE",
      desc: "Dokumen asli yang mengubah nasib bangsa.",
    },
  ];

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo-text">
          MUSEUM
          <br />
          DIGITAL
        </div>
        <div
          style={{ fontFamily: "monospace", fontSize: "0.8rem", opacity: 0.5 }}
        >
          INDEX V.2.0
        </div>
      </aside>

      <main className="main-feed">
        <header className="feed-header">
          Melestarikan <span className="accent">Jejak Waktu</span>
          <br />
          Dalam Data.
        </header>
        <div className="marquee">
          +++ ARSIP DIGITAL NUSANTARA +++ AKSES TERBUKA +++
        </div>

        <div>
          {items.map((item, index) => (
            <div key={index} className="feed-item">
              <div className="year">{item.year}</div>
              <div className="content">
                <div
                  style={{
                    color: "#d4af37",
                    fontFamily: "monospace",
                    fontSize: "0.8rem",
                  }}
                >
                  /// {item.cat}
                </div>
                <h2>{item.title}</h2>
                <p style={{ color: "#888" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
