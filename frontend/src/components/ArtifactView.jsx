import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Html, useGLTF } from "@react-three/drei";

/* --- KOMPONEN PEMUAT MODEL 3D --- */
function ArtifactModel({ path }) {
  // Memuat file GLB/GLTF
  const { scene } = useGLTF(path);

  return (
    <primitive
      object={scene}
      scale={1} // Ubah angka ini jika model terlalu besar/kecil (misal: 0.5 atau 2)
      position={[0, 0, 0]}
    />
  );
}

const ArtifactView = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("history");

  // GANTI INI: Sesuaikan dengan nama file di folder public/models/
  const MODEL_PATH = "/models/arkeologi/kapak perunggu.glb";

  return (
    <div className="artifact-view-container animate-fade-in">
      {/* Tombol Kembali */}
      <button className="back-btn" onClick={onBack}>
        ← MAIN MENU
      </button>

      {/* AREA 3D */}
      <div className="canvas-wrapper">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 5] }}>
          <Suspense
            fallback={
              <Html center>
                <div className="loading-text">LOADING 3D ASSET...</div>
              </Html>
            }
          >
            {/* Stage memberikan pencahayaan studio otomatis yang bagus */}
            <Stage environment="city" intensity={0.6} contactShadow={false}>
              {/* Panggil Komponen Model di sini */}
              <ArtifactModel path={MODEL_PATH} />
            </Stage>
          </Suspense>
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} />
        </Canvas>

        <div className="artifact-title-overlay">
          <div className="item-id">/// ITEM_ID: ARTIFACT-01</div>
          <h1>
            DIGITAL <span className="outline-text">OBJECT</span>
          </h1>
        </div>
      </div>

      {/* PANEL KANAN (DATA) */}
      <aside className="article-panel">
        <div className="panel-header">
          <button
            className={`tab-btn ${activeTab === "history" ? "active" : ""}`}
            onClick={() => setActiveTab("history")}
          >
            DATA LOG
          </button>
          <button
            className={`tab-btn ${activeTab === "tech" ? "active" : ""}`}
            onClick={() => setActiveTab("tech")}
          >
            METADATA
          </button>
        </div>

        <div className="panel-content scroll-hidden">
          {activeTab === "history" ? (
            <>
              <h2 className="content-title">DESKRIPSI ARTEFAK</h2>
              <p className="content-text">
                Ini adalah representasi digital presisi tinggi dari artefak
                sejarah. Objek ini telah direkonstruksi menggunakan fotogrametri
                dan pemindaian laser untuk melestarikan detail aslinya dalam
                format digital abadi.
              </p>
              <div className="data-row">
                <span>TAHUN</span> <span>EST. 1400 AD</span>
              </div>
              <div className="data-row">
                <span>ASAL</span> <span>JAWA TENGAH, ID</span>
              </div>
            </>
          ) : (
            <>
              <h2 className="content-title">SCAN DATA</h2>
              <div className="tech-stat">
                <label>POLYGON COUNT</label>
                <div className="bar-container">
                  <div className="bar-fill" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div className="tech-stat">
                <label>TEXTURE SIZE</label>
                <div className="bar-container">
                  <div className="bar-fill" style={{ width: "100%" }}></div>
                </div>
                <span>4096 x 4096 (4K)</span>
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  );
};

// Pre-load model agar lebih cepat saat dibuka (Opsional)
// useGLTF.preload("/models/nama-file-anda.glb");

export default ArtifactView;
