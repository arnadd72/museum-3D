import React, { Suspense, Component, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
// HAPUS IMPORT Cylinder
import {
  OrbitControls,
  useGLTF,
  Html,
  Float,
  Sparkles,
} from "@react-three/drei";
import "../App.css";
import "./ModelViewer.css";

// --- ERROR BOUNDARY ---
class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Gagal memuat model:", error);
  }
  render() {
    if (this.state.hasError)
      return <PlaceholderModel color={this.props.color} />;
    return this.props.children;
  }
}

// --- PLACEHOLDER ---
const PlaceholderModel = ({ color }) => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.5;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color || "#00ff88"}
          wireframe
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  );
};

// --- MODEL LOADER ---
const Model3D = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

const Loader = () => (
  <Html center>
    <div className="loader-text">MENGAKTIFKAN HOLOGRAM...</div>
  </Html>
);

const ModelViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("OVERVIEW");
  const data = location.state?.itemData;

  const extendedData = useMemo(() => {
    if (!data) return null;
    const dbDesc = data.description || {};

    // Fallback logic jika data detail belum ada
    return {
      scientificName: data.name + " sp.",
      location: "Lokasi Global",
      period: "Prasejarah",
      size: "Bervariasi",
      weight: "Tidak Diketahui",
      taxonomy: "Animalia",
      // GUNAKAN 'KEY' description untuk Tab Edukasi
      funFact: dbDesc.key || "Spesimen ini menyimpan rahasia evolusi bumi.",
      diet: "Omnivora",
      sizeCompare: 50,
    };
  }, [data]);

  if (!data) {
    return (
      <div className="viewer-error">
        <h1>AKSES DITOLAK</h1>
        <button onClick={() => navigate("/gallery")}>KEMBALI</button>
      </div>
    );
  }

  const themeColor = data.color || "#00ff88";
  const hologramCyan = "#00d2ff";

  return (
    <div className="viewer-container">
      <div className="canvas-wrapper">
        <div className="hologram-overlay"></div>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 8], fov: 40 }}>
          {/* EFEK HOLOGRAM (HANYA PARTIKEL) */}
          <fog attach="fog" args={["#000000", 5, 30]} />

          {/* --- LINGKARAN DIHAPUS --- */}
          {/* <Cylinder args={[2.5, 2.5, 0.05, 32]} position={[0, -1.6, 0]} receiveShadow>
             <meshStandardMaterial color={hologramCyan} transparent opacity={0.4} emissive={hologramCyan} emissiveIntensity={1} />
          </Cylinder> */}
          {/* ------------------------- */}

          <Sparkles
            count={100}
            scale={5}
            size={2}
            speed={0.5}
            color={hologramCyan}
            position={[0, 0, 0]}
          />

          {/* --- PENCAHAYAAN MANUAL (AGAR MODEL JELAS) --- */}
          {/* Ambient light tinggi untuk menerangi bayangan */}
          <ambientLight intensity={2.5} color="#ffffff" />

          {/* Lampu Utama dari depan-kanan-atas */}
          <directionalLight
            position={[10, 10, 5]}
            intensity={3.5}
            color="#ffffff"
            castShadow
          />

          {/* Lampu Pengisi dari kiri-belakang (sedikit biru) */}
          <directionalLight
            position={[-10, 5, -10]}
            intensity={2.0}
            color="#b0e0ff"
          />

          {/* Lampu Bawah untuk detail perut/bawah */}
          <pointLight
            position={[0, -2, 0]}
            intensity={1.5}
            color="#ffffff"
            distance={10}
          />

          <Suspense fallback={<Loader />}>
            <Float
              speed={1.5}
              rotationIntensity={0.2}
              floatIntensity={0.5}
              position={[0, -0.5, 0]}
            >
              {/* Kita tidak pakai Stage di sini agar kontrol lampu manual maksimal */}
              <group scale={1.5}>
                <ModelErrorBoundary color={themeColor}>
                  <Model3D path={data.modelPath} />
                </ModelErrorBoundary>
              </group>
            </Float>
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            makeDefault
            minDistance={3}
            maxDistance={15}
          />
        </Canvas>
      </div>

      {/* UI LAYER */}
      <div className="ui-top-left">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← KEMBALI
        </button>
      </div>
      <div className="ui-bottom-left">
        <div className="item-id" style={{ color: themeColor }}>
          /// ID: {data.name.substring(0, 3)}-{Math.floor(Math.random() * 999)}
        </div>
        <h1
          className="main-title"
          style={{ WebkitTextStroke: `1px ${themeColor}` }}
        >
          {data.name}
        </h1>
        <div style={{ color: "#aaa", fontStyle: "italic" }}>
          {extendedData.scientificName}
        </div>
      </div>

      <div className="ui-right-panel">
        <div className="panel-tabs">
          <button
            className={activeTab === "OVERVIEW" ? "tab active" : "tab"}
            onClick={() => setActiveTab("OVERVIEW")}
            style={
              activeTab === "OVERVIEW"
                ? { borderBottom: `2px solid ${themeColor}`, color: themeColor }
                : {}
            }
          >
            RINGKASAN
          </button>
          <button
            className={activeTab === "ANATOMY" ? "tab active" : "tab"}
            onClick={() => setActiveTab("ANATOMY")}
            style={
              activeTab === "ANATOMY"
                ? { borderBottom: `2px solid ${themeColor}`, color: themeColor }
                : {}
            }
          >
            DATA FISIK
          </button>
          <button
            className={activeTab === "FUNFACT" ? "tab active" : "tab"}
            onClick={() => setActiveTab("FUNFACT")}
            style={
              activeTab === "FUNFACT"
                ? { borderBottom: `2px solid ${themeColor}`, color: themeColor }
                : {}
            }
          >
            EDUKASI
          </button>
        </div>

        <div className="panel-content">
          {activeTab === "OVERVIEW" && (
            <>
              <h3 className="panel-heading">KLASIFIKASI & ASAL</h3>
              {/* --- GUNAKAN DESKRIPSI SINGKAT (SHORT) --- */}
              <p className="panel-desc">
                {data.description ? data.description.short : data.desc}
              </p>
              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>KATEGORI</label>
                  <span>{data.category}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>TAKSONOMI</label>
                  <span style={{ fontSize: "0.8rem", textTransform: "none" }}>
                    {extendedData.taxonomy}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>LOKASI</label>
                  <span>{extendedData.location}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>STATUS</label>
                  <span style={{ color: "#ff3333" }}>PUNAH</span>
                </div>
              </div>
            </>
          )}
          {activeTab === "ANATOMY" && (
            <>
              <h3 className="panel-heading">STATISTIK</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>MAKANAN</label>
                  <span>{extendedData.diet}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>BERAT</label>
                  <span>{extendedData.weight}</span>
                </div>
              </div>
            </>
          )}
          {activeTab === "FUNFACT" && (
            <>
              <h3 className="panel-heading">FAKTA UNIK</h3>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "15px",
                  borderLeft: `3px solid ${themeColor}`,
                }}
              >
                <div style={{ color: "#fff", fontWeight: "bold" }}>
                  Tahukah Kamu?
                </div>
                {/* --- OTOMATIS MENGGUNAKAN KEY DESCRIPTION --- */}
                <div style={{ color: "#ccc", fontStyle: "italic" }}>
                  "{extendedData.funFact}"
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
