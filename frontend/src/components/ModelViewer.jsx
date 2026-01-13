import React, { Suspense, Component, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Html,
  Float,
  Sparkles,
  Center,
  Resize,
} from "@react-three/drei";
import "../App.css";
import "./ModelViewer.css";

// --- 1. ERROR BOUNDARY ---
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
    if (this.state.hasError) {
      return <PlaceholderModel color={this.props.color} />;
    }
    return this.props.children;
  }
}

// --- 2. PLACEHOLDER (WIREFRAME) ---
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
          wireframe={true}
          transparent
          opacity={0.8}
          emissive={color || "#00ff88"}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

// --- 3. MODEL LOADER ---
const Model3D = ({ path }) => {
  const { scene } = useGLTF(path);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  return <primitive object={clonedScene} />;
};

// --- 4. LOADING ---
const Loader = () => {
  return (
    <Html center>
      <div className="loader-text">MEMUAT ASET...</div>
    </Html>
  );
};

// --- MAIN COMPONENT ---
const ModelViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("OVERVIEW");

  const data = location.state?.itemData;

  // --- 5. SMART DATA GENERATOR ---
  const extendedData = useMemo(() => {
    if (!data) return null;

    const dbDesc = data.description || {};
    const customInfo = data.details || {};

    return {
      scientificName:
        customInfo.scientificName ||
        data.name.charAt(0) + data.name.slice(1).toLowerCase() + " sp.",
      category: data.category || "Unknown Class",
      taxonomy: customInfo.taxonomy || "Kingdom Animalia",
      location: customInfo.location || "Global / Tersebar Luas",
      status: "PUNAH",
      diet: customInfo.diet || "Tidak Diketahui",
      size: customInfo.size || "Bervariasi",
      weight: customInfo.weight || "Tidak Diketahui",
      lifespan: customInfo.lifespan || "Tidak Diketahui",
      sizeCompare: 50, // Default size compare
      period: customInfo.period || "Zaman Prasejarah",
      funFact:
        dbDesc.key || "Spesies ini memiliki peran unik dalam ekosistem purba.",
      discoveryYear: customInfo.discoveryYear || "Abad ke-19",
      stats: customInfo.stats || { completeness: 50, rarity: 50, value: 50 },
    };
  }, [data]);

  // --- 6. DYNAMIC CAMERA & SCALE SETTINGS ---
  const { cameraPosition, maxZoomDistance, modelScale } = useMemo(() => {
    if (!data)
      return { cameraPosition: [0, 2, 8], maxZoomDistance: 15, modelScale: 3 };

    const name = data.name.toUpperCase();

    // JIKA BRACHIOSAURUS (atau dinosaurus raksasa lain)
    if (name.includes("BRACHIOSAURUS") || name.includes("SAUROPOD")) {
      return {
        cameraPosition: [0, 5, 20], // Kamera mundur jauh & agak naik
        maxZoomDistance: 40, // Bisa zoom out sangat jauh
        modelScale: 1.5, // Model diperkecil agar muat di layar
      };
    }

    // JIKA T-REX (Besar tapi tidak raksasa)
    if (name.includes("REX") || name.includes("SPINOSAURUS")) {
      return {
        cameraPosition: [0, 2, 12],
        maxZoomDistance: 25,
        modelScale: 2.2,
      };
    }

    // DEFAULT (Untuk hewan kecil/sedang)
    return {
      cameraPosition: [0, 1, 8],
      maxZoomDistance: 15,
      modelScale: 3,
    };
  }, [data]);

  if (!data) {
    return (
      <div className="viewer-error">
        <h1>AKSES DITOLAK</h1>
        <button onClick={() => navigate("/gallery")}>KEMBALI KE GALERI</button>
      </div>
    );
  }

  const themeColor = data.color || "#00ff88";
  const hologramCyan = "#00d2ff";

  return (
    <div className="viewer-container">
      {/* BACKGROUND 3D (TETAP HITAM/GELAP) */}
      <div className="canvas-wrapper">
        <div className="hologram-overlay"></div>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: cameraPosition, fov: 45 }}
        >
          <fog attach="fog" args={["#000000", 5, 40]} /> {/* Fog hitam pekat */}
          <Sparkles
            count={100}
            scale={10} // Area partikel diperluas
            size={2}
            speed={0.5}
            color={hologramCyan}
            position={[0, 0, 0]}
          />
          <ambientLight intensity={2.0} color="#ffffff" />
          <directionalLight
            position={[10, 10, 5]}
            intensity={3.0}
            color="#ffffff"
            castShadow
          />
          <directionalLight
            position={[-10, 5, -10]}
            intensity={1.5}
            color="#b0e0ff"
          />
          <pointLight
            position={[0, -2, 0]}
            intensity={1.0}
            color="#ffffff"
            distance={10}
          />
          <Suspense fallback={<Loader />}>
            <Float
              speed={1.5}
              rotationIntensity={0.2}
              floatIntensity={0.5}
              position={[0, -0.5, 0]} // Posisi dasar float
            >
              <group scale={1.5}>
                <ModelErrorBoundary color={themeColor}>
                  {/* Center & Resize: Memastikan model selalu di tengah (0,0,0) */}
                  <Center top>
                    <Resize scale={modelScale}>
                      <Model3D path={data.modelPath} />
                    </Resize>
                  </Center>
                </ModelErrorBoundary>
              </group>
            </Float>
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            makeDefault
            minDistance={2}
            maxDistance={maxZoomDistance} // Batas zoom out dinamis
            target={[0, 0, 0]} // Selalu fokus ke tengah
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
          /// ID: {data.name.substring(0, 3)}-{Math.floor(Math.random() * 9999)}
        </div>
        <h1
          className="main-title"
          style={{ WebkitTextStroke: `1px ${themeColor}` }}
        >
          {data.name}
        </h1>
        <div
          style={{
            color: "#aaa",
            letterSpacing: "2px",
            marginTop: "10px",
            fontStyle: "italic",
            fontSize: "1.1rem",
          }}
        >
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
          {/* TAB 1: RINGKASAN */}
          {activeTab === "OVERVIEW" && (
            <>
              <h3 className="panel-heading">KLASIFIKASI & ASAL</h3>
              <p className="panel-desc">
                {data.description ? data.description.short : data.desc}
              </p>

              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>KELOMPOK</label>
                  <span>{extendedData.category}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>TAKSONOMI</label>
                  <span style={{ fontSize: "0.8rem" }}>
                    {extendedData.taxonomy}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>LOKASI TEMUAN</label>
                  <span style={{ fontSize: "0.9rem" }}>
                    {extendedData.location}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>STATUS</label>
                  <span style={{ color: "#ff3333", fontWeight: "bold" }}>
                    {extendedData.status}
                  </span>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: DATA FISIK */}
          {activeTab === "ANATOMY" && (
            <>
              <h3 className="panel-heading">KARAKTERISTIK FISIK</h3>

              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>DIET (MAKANAN)</label>
                  <span>{extendedData.diet}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>ESTIMASI UMUR</label>
                  <span>{extendedData.lifespan}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>UKURAN TUBUH</label>
                  <span style={{ fontSize: "0.9rem" }}>
                    {extendedData.size}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>BERAT (PERKIRAAN)</label>
                  <span>{extendedData.weight}</span>
                </div>
              </div>

              {/* DATA KOLEKSI */}
              <div
                style={{
                  marginTop: "25px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: themeColor,
                    fontWeight: "bold",
                    marginBottom: "15px",
                    letterSpacing: "1px",
                  }}
                >
                  DATA KOLEKSI (SPECIMEN STATS)
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    { label: "KEUTUHAN", val: extendedData.stats.completeness },
                    { label: "KELANGKAAN", val: extendedData.stats.rarity },
                    { label: "NILAI SAINS", val: extendedData.stats.value },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "80px",
                          fontSize: "0.7rem",
                          color: "#888",
                          fontWeight: "bold",
                        }}
                      >
                        {stat.label}
                      </div>
                      <div
                        style={{
                          flex: 1,
                          height: "6px",
                          background: "#333",
                          borderRadius: "3px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${stat.val}%`,
                            height: "100%",
                            background: themeColor,
                            boxShadow: `0 0 10px ${themeColor}`,
                            transition: "width 1s ease-out",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          width: "35px",
                          fontSize: "0.8rem",
                          color: "#fff",
                          textAlign: "right",
                        }}
                      >
                        {stat.val}%
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#666",
                    marginTop: "10px",
                    fontStyle: "italic",
                  }}
                >
                  *Berdasarkan analisis data geologis global.
                </div>
              </div>
            </>
          )}

          {/* TAB 3: EDUKASI */}
          {activeTab === "FUNFACT" && (
            <>
              <h3 className="panel-heading">WAWASAN & SEJARAH</h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: themeColor,
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    PERIODE HIDUP
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "10px",
                      borderRadius: "4px",
                      textAlign: "center",
                      color: "#fff",
                      fontWeight: "bold",
                      border: `1px solid ${themeColor}`,
                    }}
                  >
                    {extendedData.period}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: themeColor,
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    SEJARAH PENEMUAN
                  </div>
                  <div style={{ color: "#ccc", fontSize: "0.9rem" }}>
                    Pertama kali diidentifikasi atau dipelajari secara luas
                    pada:{" "}
                    <strong style={{ color: "#fff" }}>
                      {extendedData.discoveryYear}
                    </strong>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "15px",
                    borderLeft: `3px solid ${themeColor}`,
                    marginTop: "5px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    TAHUKAH KAMU?
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#ccc",
                      fontStyle: "italic",
                      lineHeight: "1.6",
                    }}
                  >
                    "{extendedData.funFact}"
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "0.7rem",
                    color: "#555",
                  }}
                >
                  Database v3.0 // Asset Path: {data.modelPath}
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
